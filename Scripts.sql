USE [master]
GO

CREATE DATABASE [MoviesDb]
GO

USE [MoviesDb]
GO

CREATE TABLE [dbo].[MovieDetails](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY,
	[Name] [nvarchar](max) NULL,
	[IsReleased] [bit] NOT NULL,
	[IsWatched] [bit] NOT NULL
)
GO


INSERT INTO dbo.MovieDetails VALUES('The Amazing Spider-Man 2', 1, 0);
INSERT INTO dbo.MovieDetails VALUES('The Other Woman', 1, 1);
INSERT INTO dbo.MovieDetails VALUES('Shaadi ke Side Effects', 1, 0);
INSERT INTO dbo.MovieDetails VALUES('Walk of Shame', 1, 0);
INSERT INTO dbo.MovieDetails VALUES('Lucky Kabootar', 1, 0);

GO
