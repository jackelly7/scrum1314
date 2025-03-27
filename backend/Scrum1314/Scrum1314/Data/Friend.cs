using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Scrum1314.Data
{
    [PrimaryKey(nameof(user_init_id), nameof(user_rec_id))]
    public class Friend
    {
        [ForeignKey(nameof(User))]
        public int user_init_id { get; set; }
        public virtual User? User_Init { get; set; }


        [ForeignKey(nameof(User))]
        public int user_rec_id { get; set; }
        public virtual User? User_Rec { get; set; }

        [Required]
        public int user_rec_accept { get; set; }
    }
}
