using Microsoft.EntityFrameworkCore;
using StudentManagerAPI.DataObjects;

namespace StudentManagerAPI.Data
{
    public class DataContext : DbContext
	{
		public DataContext(DbContextOptions<DataContext> options) : base(options) { }

		public DbSet<Student> Students => Set<Student>();
	}
}
