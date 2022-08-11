using Microsoft.EntityFrameworkCore;

namespace RecordsAPI.Models
{
    public class RecordsContext :DbContext
    {
        public RecordsContext(DbContextOptions<RecordsContext> options):base(options)
        {

        }

        public DbSet<Records> Records { get; set; }
    }
}
