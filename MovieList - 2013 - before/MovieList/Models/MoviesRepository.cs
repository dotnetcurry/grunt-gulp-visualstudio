using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MovieList.Models
{
    public class MoviesRepository
    {
        MovieDbContext context;
        public MoviesRepository()
        {
            context = new MovieDbContext();
        }

        public IEnumerable<MovieDetails> GetAll()
        {
            return context.Movies.AsEnumerable();
        }

        public MovieDetails Add(MovieDetails newMovie)
        {
            try
            {
                var newMovieDetails = context.Movies.Add(newMovie);
                context.SaveChanges();
                return newMovieDetails;
            }
            catch
            {
                return null;
            }
        }

        public MovieDetails Update(MovieDetails movieToUpdate)
        {
            try
            {
                var movieDetails = context.Movies.SingleOrDefault(m=> m.Id == movieToUpdate.Id);
                
                if (movieDetails != null)
                {
                    movieDetails.IsReleased = movieToUpdate.IsReleased;
                    movieDetails.IsWatched = movieToUpdate.IsWatched;

                    context.Entry(movieDetails).State = System.Data.Entity.EntityState.Modified;
                    //var newMovieDetails = context.Movies.Attach(movieToUpdate);
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