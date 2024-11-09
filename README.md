# Cara farming suket $GRASS di PC / Codespace / VPS / Android

# Daftar new akun 
- Register https://app.getgrass.io/register/?referralCode=6Uf8Yg5m2EuJYsG
  - Android user pakai Kiwi Browser
- Verify registrasi akun di email
- Connect solana wallet (Phantom / Solflare / Backpack)
  - Android user use Solflare Web Wallet for easy to connect https://solflare.com/
- Verify connect wallet di email
- Masuk ke https://app.getgrass.io/dashboard
  - Android user pakai App Element Inspector https://play.google.com/store/apps/details?id=com.code_element.vipapp.newapp
- Pencet F12 / Klik kanan pilih inspect
- Masuk ke tab console
- Ketik ```localStorage.getItem('userId')``` ENTER
- Jika error dan muncul
![0001](https://github.com/BJ-WEB3/BJ-Suket/blob/main/pasting.jpeg)
- Ketik ```allow pasting``` ENTER
- Ketik ```localStorage.getItem('userId')``` ENTER, Jika sukses akan muncul tampilan seperti ini
![0001](https://github.com/BJ-WEB3/BJ-Suket/blob/main/Screenshot%202024-11-09%20122416.png)
- Copy n save UID

# Cara running

## PC
- Install GUI https://git-scm.com/downloads/win
- Install nodejs https://nodejs.org/dist/v22.11.0/node-v22.11.0-x64.msi
- Open powershell
- Ketik ```git clone https://github.com/BJ-WEB3/BJ-Suket.git``` ENTER
- Ketik ```Set-ExecutionPolicy RemoteSigned -Scope CurrentUser``` ENTER
- Ketik ```cd BJ-Suket``` ENTER
- Ketik ```npm install``` ENTER
- Masuk ke directory PC... C:\Users\XXXX\BJ-Suket 
- Open `uid.txt` ganti dengan UID suketmu, SAVE
- Open `proxy.txt` ganti dengan proxymu, SAVE `(FREE User SKIP step ini)`
- Kembali ke powershell
- Ketik ```npm start``` ENTER
- Pilih Server:
    - `BJ 1,2,3` for free proxy
    - `CUSTOM` jika pakai proxy sendiri
    - `NO PROXY` jika ingin pakai IP Machine
- Powershell jangan di close


## Codespace - Bisa di PC / HP 
- Open browser https://github.com/codespaces login dengan akun github
- Klik `Use this template`
![0001](https://github.com/BJ-WEB3/BJ-Suket/blob/main/Screenshot%202024-11-09%20125754.png)
- Ketik ```git clone https://github.com/BJ-WEB3/BJ-Suket.git``` ENTER
- Ketik ```cd BJ-Suket``` ENTER
- Ketik ```npm install``` ENTER
- Edit UID dan Proxy
![0001](https://github.com/BJ-WEB3/BJ-Suket/blob/main/Screenshot%202024-11-09%20130229.png)
- Ketik ```npm start``` ENTER
- Pilih Server:
    - `BJ 1,2,3` for free proxy
    - `CUSTOM` jika pakai proxy sendiri
    - `NO PROXY` jika ingin pakai IP Machine
- Browser jangan di close


## VPS(Paid) - Bisa di PC / HP
- Download Termius di Web / Playstore
- Open Termius 
- Ketik ```sudo apt-get install screen``` ENTER
- Ketik ```screen -S suketmu``` ENTER
    - ganti `suketmu` sesuai seleramu 
- Ketik ```git clone https://github.com/BJ-WEB3/BJ-Suket.git``` ENTER 
- Ketik ```cd BJ-Suket``` ENTER
- Ketik ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash``` ENTER
- Ketik ```source ~/.bashrc``` ENTER
- Ketik ```nvm install --lts``` ENTER
- Ketik ```apt install npm``` or ```npm install``` ENTER
- Ketik ```nano uid.txt``` ENTER
    - ganti UID dengan UID suketmu >>> CTRL + X >>> pilih Y/YES >>> ENTER
- Ketik ```nano proxy.txt``` ENTER
    - ganti dengan proxymu >>> CTRL + X >>> pilih Y/YES >>> ENTER `(FREE User skip step ini)`
- Ketik ```npm start``` ENTER
- Pilih Server:
    - `BJ 1,2,3` for free proxy
    - `CUSTOM` jika pakai proxy sendiri
    - `NO PROXY` jika ingin pakai IP Machine
*Screen control 
- Klik `CTRL + A (Klik bareng dan tahan)`, terus klik `D`
    - Untuk exit dari screen, VPS tetap jalan meskipun Termius di close
- Ketik ```screen -ls``` ENTER
    - Untuk mengecek bot running background
- Re-Open Termius, Ketik ```screen -r``` ENTER
    - Untuk masuk kembali ke screen


## Android 
- Download Termux https://f-droid.org/repo/com.termux_1000.apk
- Install n Open Termux
- Ketik ```pkg update``` ENTER
- Ketik ```pkg upgrade``` ENTER
- Ketik ```termux-wake-lock``` ENTER
  - Allow/Izinkan, Izinkan running background (agar layar off tetap jalan)
- Ketik ```termux-setup-storage``` ENTER
  - Allow/Izinkan
- Ketik ```pkg install nodejs``` ENTER
- Ketik ```pkg install git``` ENTER
- Ketik ```git clone https://github.com/BJ-WEB3/BJ-Suket.git``` ENTER 
- Ketik ```cd BJ-Suket``` ENTER
- Ketik ```npm install``` ENTER
- Edit UID dan Proxy `(FREE User SKIP step edit/upload proxy)` pilih Opsi A / B :
- Opsi A :
  - Ketik ```nano uid.txt``` ENTER
      - ganti UID dengan UID suketmu >>> CTRL + X >>> pilih Y/YES >>> ENTER
  - Ketik ```nano proxy.txt``` ENTER
      - ganti dengan proxymu >>> CTRL + X >>> pilih Y/YES >>> ENTER 
- Opsi B, dengan cara upload file:
  - Download CX File Explorer di PlayStore
  - Open CX File, Create Folder (Beri nama : `BJ`, misal)
  - Masuk ke `BJ` folder
  - Create file `uid.txt` isi dengan UID suketmu
  - Create file `proxy.txt` isi dengan proxymu
  - Kembali ke Termux
      - Untuk upload UID, Ketik: ```cp /storage/emulated/0/BJ/uid.txt ~/BJ-Suket/uid.txt``` ENTER
      - Untuk upload Proxy, Ketik: ```cp /storage/emulated/0/BJ/proxy.txt ~/BJ-Suket/proxy.txt``` ENTER
- Ketik ```npm start``` ENTER
- Pilih Server:
    - `BJ 1,2,3` for free proxy
    - `CUSTOM` jika pakai proxy sendiri
    - `NO PROXY` jika ingin pakai IP Machine
- Minimize Termux


## +++++
- Untuk stop BOT, Klik ```CTRL + C```
- Untuk update Free Proxy setiap hari:
  - Stop dulu BOT nya ```CTRL + C```
  - Ketik ```git pull``` ENTER
  - Run kembali BOT nya ```npm start``` ENTER
 



██████        ██ 
██   ██       ██ 
██████        ██ 
██   ██  ██   ██ 
██████    █████ 

Copyright (c) BJ 2024 
