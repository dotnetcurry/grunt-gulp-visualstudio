using Microsoft.AspNet.Mvc;
using MoviesList.Models;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MoviesList.Controllers
{
	[Route("api/movies")]
	public class MoviesController : Controller
    {
		MoviesDbContext context;

		public MoviesController(MoviesDbContext context)
		{
			this.context = context;
		}

		[HttpGet]
		public IEnumerable<MovieDetails> Get()
		{
			return this.context.Movies.AsEnumerable();
		}

		[HttpPost]
		public MovieDetails Post([FromBody]MovieDetails newMovie)
		{
			try
			{
				var addedMovie = this.context.Movies.Add(newMovie);
				context.SaveChanges();

				return addedMovie.Entity;
			}
			catch 
			{
				return null;
			}			
		}

		[HttpPut]
		[Route("{id:int}")]
		public MovieDetails Put(int id, [FromBody]MovieDetails updatedMovie)
		{
			try
			{
				var movieDetails = context.Movies.SingleOrDefault(m => m.Id == updatedMovie.Id);

				if (movieDetails != null)
				{
					movieDetails.IsReleased = updatedMovie.IsReleased;
					movieDetails.IsWatched = updatedMovie.IsWatched;

					context.Entry(movieDetails).State = Microsoft.Data.Entity.EntityState.Modified;

					context.SaveChanges();
					return movieDetails;
				}

				return null;
			}
			catch
			{
				return null;
			}
		}
    }
}
