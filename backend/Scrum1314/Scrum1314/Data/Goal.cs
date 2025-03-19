using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Scrum1314.Data
{
    public class Goal
    {
        [Key]
        public int goal_id { get; set; }

        [Required]
        public string goal_description { get; set; }

        [Required]
        public int goal_frequency_num { get; set; }

        [ForeignKey(nameof(Goal_Frequency))]
        [Required]
        public int goal_frequency_id { get; set; }
        public virtual Goal_Frequency? Goal_Frequency { get; set; }

        [Required]
        public string goal_start_date { get; set; }

        [Required]
        public string goal_end_date { get; set; }

        [Required]
        public int goal_notification { get; set; }

        [Required]
        public int goal_share { get; set; }

        [ForeignKey(nameof(Goal_Status))]
        [Required]
        public int goal_status_id { get; set; }
        public virtual Goal_Status? Goal_Status { get; set; }

        [Required]
        public int goal_streak_length { get; set; }

        [ForeignKey(nameof(User))]
        [Required]
        public int user_id { get; set; }
        public virtual User? User { get; set; }

    }
}
