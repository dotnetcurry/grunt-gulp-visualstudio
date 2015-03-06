using Microsoft.Data.Entity;
using System;
using System.ComponentModel.DataAnnotations;

namespace MoviesList.Models
{
	public class MovieDetails
	{
		[Key]
		public int Id { get; set; }
		public string Name { get; set; }
		public bool IsWatched { get; set; }
		public bool IsReleased { get; set; }
	}

    public class MoviesDbContext : DbContext
    {
		public DbSet<MovieDetails> Movies { get; set; }

	}
}