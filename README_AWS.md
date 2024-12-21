# AWS

- How to SSH (Secure Shell) or login into your server 
ssh -i sanchit-test.pem ubuntu@13.234.111.39
ssh -i <name-of-pem-file> <type-of-OS-running>@<IP-of-server>

- How to give read write execute permission to a file

eg : chmod rwxr-xr-- <filename>

here there are 9 characters divided in 3 sets

 - rwx - read write execute 
 - r-x - read execute
 - r-- read

 we can also represent it with numbers 
 - r = 4 
 - w = 2
 - x = 1

 so chmod rwxr-xr-- <filename> can be written in chmod 754 <filename>