using Microsoft.EntityFrameworkCore;
using StudentManagerAPI.Data;
using StudentManagerAPI.DataObjects;

namespace StudentManagerAPI.Models
{

	public interface IStudentModel
	{
		Task<List<Student>> CreateStudent(Student student);
		Task<List<Student>> ReadStudent();
		Task<List<Student>> UpdateStudent(Student student);
		Task<List<Student>> DeleteStudent(int id);
	}
	public class StudentModel : IStudentModel
	{
		private readonly DataContext _context;
		public StudentModel(DataContext context)
		{
			_context = context;
		}

		public async Task<List<Student>> CreateStudent(Student student)
		{
			_context.Students.Add(student);
			await _context.SaveChangesAsync();

			return await _context.Students.ToListAsync();
		}
		public async Task<List<Student>> ReadStudent()
		{
			List<Student> students = await _context.Students.ToListAsync();

			return students;
		}
		public async Task<List<Student>> UpdateStudent(Student student)
		{
			List<Student> students = new List<Student>();

			Student dbStudent = await _context.Students.FindAsync(student.id);
			
			dbStudent.id = student.id;
			dbStudent.firstName = student.firstName;
			dbStudent.lastName = student.lastName;
			dbStudent.dateOfBirth = student.dateOfBirth;
			dbStudent.age = student.age;
			dbStudent.major = student.major;
			dbStudent.gpa = student.gpa;
			await _context.SaveChangesAsync();

			students = await _context.Students.ToListAsync(); // perchance

			return students;
			

		}
		public async Task<List<Student>> DeleteStudent(int id)
		{
			Student dbStudent = await _context.Students.FindAsync(id);
			
			_context.Students.Remove(dbStudent);
			await _context.SaveChangesAsync();

			return await _context.Students.ToListAsync(); //Come back here
		}
	}
}
