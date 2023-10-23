using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentManagerAPI.Data;
using StudentManagerAPI.DataObjects;
using StudentManagerAPI.Models;

namespace StudentManagerAPI.Controllers
{
    [Route("api/[controller]")]
	[ApiController]
	public class StudentController : ControllerBase
	{
		private readonly IStudentModel _studentModel;
        public StudentController(IStudentModel studentModel)
        {
			_studentModel = studentModel;
        }

        [HttpGet]
		[Route("ReadStudent")]
		public async Task<ActionResult<List<Student>>> ReadStudent()
		{
			List<Student> students = await _studentModel.ReadStudent(); 
			
			return Ok(students);
		}

		[HttpPost]
		[Route("CreateStudent")]
		public async Task<ActionResult<List<Student>>> CreateStudent(Student student)
		{
			List<Student> students = await _studentModel.CreateStudent(student);
			
			return Ok(students);
		}

		[HttpPut]
		[Route("UpdateStudent")]
		public async Task<ActionResult<List<Student>>> UpdateStudent(Student student)
		{
			List<Student> dbStudent = await _studentModel.UpdateStudent(student);
			if (dbStudent == null)
			{
				return BadRequest("Student not found.");
			}
		
			return Ok(dbStudent);
		}

		[HttpDelete]
		[Route("DeleteStudent/{id}")]
		public async Task<ActionResult<List<Student>>> DeleteStudent(int id)
		{
			List<Student> dbStudent = await _studentModel.DeleteStudent(id);
			if (dbStudent == null)
			{
				return BadRequest("Student not found.");
			}

			return Ok(dbStudent);
		}
	}
}
