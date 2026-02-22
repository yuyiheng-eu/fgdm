import os
file_list = os.listdir('C:\\Users\\10728\\Desktop\\新建文件夹\\Test\\static\\videos')
x = open('C:\\Users\\10728\\Desktop\\新建文件夹\\Test\\html_videos.txt', 'w')
for idx, file_name in enumerate(file_list):
    
    x.write(f'<div class="item item-video{idx}">' + '\n')
    x.write(f' <video poster="" id="video{idx}" controls muted loop height="100%" preload="metadata">' + '\n')
    x.write(f'  <source src="static/videos/{file_name}" type="video/mp4">' + '\n')
    x.write(f' </video>' + '\n')
    x.write(f'</div>' + '\n')
        