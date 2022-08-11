using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecordsAPI.Models
{
    public class Records
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Username { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Password { get; set; }
    }
}
