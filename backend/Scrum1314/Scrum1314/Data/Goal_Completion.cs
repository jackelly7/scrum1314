using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Scrum1314.Data
{
    public class Goal_Completion
    {
        [Key]
        public int goal_completion_id { get; set; }

        [ForeignKey(nameof(Goal))]
        [Required]
        public int goal_id { get; set; }
        public virtual Goal? Goal { get; set; }

        [Required]
        public string date_of_completion { get; set; }
    }
}
