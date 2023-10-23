namespace StudentManagerAPI.DataObjects
{
    public class Student
    {
        public int id { get; set; }
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public string? dateOfBirth { get; set; }
        public int age { get; set; }
        public string? major { get; set; }
        public double gpa { get; set; }
    }
}
