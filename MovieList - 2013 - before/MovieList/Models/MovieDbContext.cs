using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MovieList.Models
{
    public class MovieDbContext: DbContext
    {
        public MovieDbContext(): base("movieConn")
        {

        }

        public DbSet<MovieDetails> Movies { get; set; }
    }
}