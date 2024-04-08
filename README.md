# development
Development is a react app that encouages users to create playlists from the given song data, they can filter the data by artist, or by genre. Users can also sort the data A-Z/Z-A by title, artist, and then also sort by the length of a song. 

You can see the deployed app here https://development-orcin-eight.vercel.app/

## components
The main components of this app are separated into Songs.js, SongCard.js, and Playlist.js. 

### Songs
This is where most of the app is. It is the main organizer where the filter buttons, sort, and where all the song information is kept.

Songs maps all the items in the given song-data.json file to the SongCard so that the information from the json file can be filtered and sorted through. 

In Songs.js, the components, ArtistFilter, GenreFilter, and SortBy are created. These components are found in the FilterSort functions it has shared functionality int he Functions.js file.

Functions has the Filter and the handleSort methods which are used in all three components so that users can filter and sort through the songs any way. 

### SongCard
This is where all the song data is organized into cards. It's main function is to just put all the song data in an easy to read card.

### Playlist
This is the main aggregator along with the SongCardButton. This component displays the songs that are added to the playlist 

This also includes the NewPlaylist button which will clear away the current playlist, and also adds to the current playlist number.

To run this app simply run 
npm install, and then npm run start.

## Bugs
The known bugs in this project include the buttons not resetting when the NewPlaylist button is clicked. And there are some combinations of filter and artists that don't work. For most combinations, and switching combinations, the filter and sort options to work, but when switching back and forth between options at some points there is a mess up. 