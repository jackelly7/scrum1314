using System.ComponentModel.DataAnnotations;

namespace Scrum1314.Data
{
    public class Emotion
    {
        [Key]
        public int emotion_id { get; set; }

        [Required]
        public string mood_emotion { get; set; }
    }
}
