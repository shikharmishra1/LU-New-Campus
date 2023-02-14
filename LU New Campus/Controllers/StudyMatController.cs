using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using LU_New_Campus.Models;
using LU_New_Campus.Services;

namespace LU_New_Campus.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudyMatController : ControllerBase
    {
        private readonly LUNC_Service _lunc_service;
        public StudyMatController(LUNC_Service luncService)
        {
            _lunc_service = luncService;
            
        }

        [HttpGet]
        public async Task<List<StudyMatPost>> Get() =>
        await _lunc_service.GetAsync();

        [HttpPost]
        public async Task<IActionResult> Post(StudyMatPost newStudyMatPost)
        {
            await _lunc_service.CreateAsync(newStudyMatPost);

            return CreatedAtAction(nameof(Get), new { id = newStudyMatPost.Id }, newStudyMatPost);
        }

    }
}
