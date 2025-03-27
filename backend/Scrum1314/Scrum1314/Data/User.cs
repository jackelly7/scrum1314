using System.ComponentModel.DataAnnotations;

namespace Scrum1314.Data
{
    public class User
    {
        [Key]
        public int user_id { get; set; }

        [Required]
        public string username { get; set; }
        
        [Required]
        public string password { get; set; }

        [Required]
        public string first_name { get; set; }

        [Required]
        public string last_name { get; set; }

        public string? profile_picture { get; set; }
    }
}
