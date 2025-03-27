using System.ComponentModel.DataAnnotations;

namespace Scrum1314.Data
{
    public class Goal_Frequency
    {
        [Key]
        public int goal_frequency_id { get; set; }

        [Required]
        public string goal_frequency_description { get; set; }

    }
}
