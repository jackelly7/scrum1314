using System.ComponentModel.DataAnnotations;

namespace Scrum1314.Data
{
    public class Goal_Status
    {
        [Key]
        public int goal_status_id { get; set; }

        [Required]
        public string goal_status_description { get; set; }

    }
}
