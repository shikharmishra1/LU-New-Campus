using static System.Net.Mime.MediaTypeNames;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace LU_New_Campus.Models
{
    public class StudyMatPost
    {
        public StudyMatPost() { 
            this.CreatedAt= DateTime.UtcNow;
            this.UpdatedAt= DateTime.UtcNow;
        }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonIgnoreIfNull]
        public string? Id { get; set; }

        [BsonElement("Title")]
        
        public string? Title { get; set; }

        [BsonElement("Content")]
        [BsonIgnoreIfNull]
        [MaxLength(1000)]
        public string? Content { get; set; }

        [BsonElement("Course")]
        [RegularExpression("B.tech|BCA|MCA|LLB", ErrorMessage = "The course doesn't exist or not added to the site yet")]
        [BsonIgnoreIfNull]
        public string? Course { get; set; }

        [BsonElement("Year")]
        [Range(0,5, ErrorMessage ="Enter a valid value for the year input")]
        [BsonIgnoreIfNull]
        public int Year { get; set; }

        [BsonElement("Documents")]
        [BsonIgnoreIfNull]
        public List<Document>? Documents { get; set; }

        [BsonElement("Images")]
        [BsonIgnoreIfNull]
        public List<Image>? Images { get; set; }

        [BsonElement("CreatedAt")]
        [BsonIgnoreIfNull]
        public DateTime CreatedAt { get; set; }

        [BsonElement("UpdatedAt")]
        [BsonIgnoreIfNull]
        public DateTime UpdatedAt { get; set; }
    }
    public class Document
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; }

        [BsonElement("URL")]
        public string URL { get; set; }
    }

    public class Image
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public string? Id { get; set; }

        [BsonElement("Name")]
        public string? Name { get; set; }

        [BsonElement("URL")]
        public string? URL { get; set; }
    }
}