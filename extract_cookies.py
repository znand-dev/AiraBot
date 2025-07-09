# extract_cookies.py
import browser_cookie3
import os

def save_cookies(cj, output_file='cookies.txt'):
    count = 0
    with open(output_file, 'w') as f:
        for c in cj:
            if "youtube.com" in c.domain:
                count += 1
                f.write(
                    f"{c.domain}\t"
                    f"{'TRUE' if c.domain_initial_dot else 'FALSE'}\t"
                    f"{c.path}\t"
                    f"{'TRUE' if c.secure else 'FALSE'}\t"
                    f"{int(c.expires or 0)}\t"
                    f"{c.name}\t"
                    f"{c.value}\n"
                )
    return count

print("🔍 Mendeteksi cookies dari browser...")

try:
    # Bisa pakai Chrome atau Firefox
    cj = browser_cookie3.load()
    jumlah = save_cookies(cj)

    if jumlah > 0:
        print(f"✅Success: {jumlah} cookies dari youtube.com berhasil disimpan ke cookies.txt")
    else:
        print("⚠️ Warn: Tidak ditemukan cookies dari youtube.com, pastikan sudah login dan buka YouTube di browser.")
except Exception as e:
    print(f"❌Error: Gagal ambil cookies: {e}")
