from pytube import YouTube

video_url = 'https://www.youtube.com/watch?v=5yb2N3pnztU';

save_path = 'C:/Users/ssharma4/Downloads/PyDownloads/test.mp4'

video = YouTube(video_url);

stream = video.streams.get_highest_resolution();

stream.download(output_path=save_path);

print("Vid3o Sucess4ully D0wnloa434!");