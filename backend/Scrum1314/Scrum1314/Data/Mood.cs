using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Scrum1314.Data
{
    public class Mood
    {
        [Key]
        public int mood_id { get; set; }

        [Required]
        [ForeignKey(nameof(Emotion))]
        public int emotion_id { get; set; }
        public virtual Emotion? Emotion { get; set; }

        public string? mood_description { get; set; }

        [Required]
        [ForeignKey(nameof(User))]
        public int user_id { get; set; }
        public virtual User? User { get; set; }

        [Required]
        public string mood_date { get; set; }

    }
}
