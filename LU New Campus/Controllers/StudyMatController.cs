using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using LU_New_Campus.Models;
using LU_New_Campus.Services;
using Newtonsoft.Json;
using MongoDB.Bson;
using Amazon.Util.Internal;
using Microsoft.AspNetCore.Hosting;
using MongoDB.Driver.Linq;
using Microsoft.AspNetCore.Routing.Constraints;

namespace LU_New_Campus.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudyMatController : ControllerBase
    {
        private readonly LUNC_Service _lunc_service;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public StudyMatController(LUNC_Service luncService, IWebHostEnvironment webHostEnvironment)
        {
            _lunc_service = luncService;
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpGet]
        public async Task<List<StudyMatPost>> Get() =>
        await _lunc_service.GetAsync();

        [HttpGet("{fileName}")]
        public IActionResult GetFile(string fileName)
        {
            var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads/studymatimg");
            var filePath = Path.Combine(uploadsFolder, fileName);
            var extention = Path.GetExtension(fileName);
            if(extention==".jpg" || extention==".png" || extention == ".jpeg" )
                return PhysicalFile(filePath, "image/jpeg", enableRangeProcessing: true);
            else
                return PhysicalFile(filePath, "application/octet-stream", enableRangeProcessing: true);
        }
        [HttpPost]
        public async Task<IActionResult> Post( StudyMatPost newStudyMatPost)
        {
            foreach(Image img in newStudyMatPost.Images)
            {
                img.imgId = ObjectId.GenerateNewId().ToString();
            }
            await _lunc_service.CreateAsync(newStudyMatPost);

            return CreatedAtAction(nameof(Get), new { id = newStudyMatPost.Id }, newStudyMatPost);
        }
        [HttpPost("upload")]
        public async Task<IActionResult> Upload(List<IFormFile> files)
        {
            List<string> fileNames = new List<string>();
            foreach(IFormFile file in files) 
            {
                if (file == null || file.Length == 0)
                {
                    return BadRequest("Please select a file to upload.");
                }
                
                var timestamp = DateTime.Now.ToString("yyyyMMddHHmmssfff");

                var fileName = Path.GetFileNameWithoutExtension(file.FileName);
                
                var fileExtension = Path.GetExtension(file.FileName);
                var newFileName = $"{fileName}_{timestamp}{fileExtension}";
                fileNames.Add(newFileName);
                var filePath = "";

                //handling the filetype
                
                    
                filePath = Path.Combine(_webHostEnvironment.WebRootPath, "uploads/studymatimg", newFileName);
                    

                //creating the file
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
            }
            Console.Write(fileNames.Count);
            
            return Ok(fileNames);
        }
        

    }
}
