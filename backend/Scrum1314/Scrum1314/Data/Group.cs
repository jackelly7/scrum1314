using System.ComponentModel.DataAnnotations;

namespace Scrum1314.Data
{
    public class Group
    {
        [Key]
        public int group_id { get; set; }

        [Required]
        public string group_name { get; set; }

        [Required]
        public string group_description { get; set; }
    }
}
