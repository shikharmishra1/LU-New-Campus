using LU_New_Campus.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LU_New_Campus.Services;

public class LUNC_Service
{
    private readonly IMongoCollection<StudyMatPost> _studyMatCollection;

    public LUNC_Service(
        IOptions<LUNC_DB_Settings> lunc_DB_settings)
    {
 

        var mongoClient = new MongoClient(
            lunc_DB_settings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            lunc_DB_settings.Value.DatabaseName);

        _studyMatCollection = mongoDatabase.GetCollection<StudyMatPost>(
            lunc_DB_settings.Value.StudyMatCollectionName);
    }

    public async Task<List<StudyMatPost>> GetAsync() =>
        await _studyMatCollection.Find(_ => true).ToListAsync();

    public async Task<StudyMatPost?> GetAsync(string id) =>
        await _studyMatCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(StudyMatPost newBook) =>
        await _studyMatCollection.InsertOneAsync(newBook);

    public async Task UpdateAsync(string id, StudyMatPost updatedBook) =>
        await _studyMatCollection.ReplaceOneAsync(x => x.Id == id, updatedBook);

    public async Task RemoveAsync(string id) =>
        await _studyMatCollection.DeleteOneAsync(x => x.Id == id);
}