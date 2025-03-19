using Microsoft.EntityFrameworkCore;

namespace Scrum1314.Data
{
    public class ScrumDbContext : DbContext
    {
        public ScrumDbContext(DbContextOptions<ScrumDbContext> options) : base(options)
        {

        }

        public DbSet<Emotion> Emotion { get; set; }
        public DbSet<Friend> Friend { get; set; }
        public DbSet<Goal> Goal { get; set; }
        public DbSet<Goal_Completion> Goal_Completion { get; set; }
        public DbSet<Goal_Frequency> Goal_Frequency { get; set; }
        public DbSet<Goal_Status> Goal_Status { get; set; }
        public DbSet<Group> Group { get; set; }
        public DbSet<Mood> Mood { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<User_Group> User_Group { get; set; }
    }
}
