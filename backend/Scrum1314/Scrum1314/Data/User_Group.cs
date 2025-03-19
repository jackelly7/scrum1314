using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Scrum1314.Data
{
    [PrimaryKey(nameof(user_id), nameof(group_id))]
    public class User_Group
    {
        [ForeignKey(nameof(User))]
        public int user_id { get; set; }
        public virtual User? User { get; set; }

        [ForeignKey(nameof(Group))]
        public int group_id { get; set; }
        public virtual Group? Group { get; set; }
    }
}
