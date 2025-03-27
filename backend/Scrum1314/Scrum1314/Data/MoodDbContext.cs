using Microsoft.EntityFrameworkCore;
using Scrum1314.Data;

public class MoodDbContext : DbContext
{
    public MoodDbContext(DbContextOptions<MoodDbContext> options)
        : base(options)
    {
    }

    public DbSet<Mood> Moods { get; set; }
    public DbSet<Emotion> Emotions { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Mood>().ToTable("Mood");
        modelBuilder.Entity<Emotion>().ToTable("Emotion");

        modelBuilder.Entity<Mood>()
            .HasOne<Emotion>()
            .WithMany()
            .HasForeignKey(m => m.emotion_id);
    }
}
