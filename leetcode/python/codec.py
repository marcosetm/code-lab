# https://leetcode.com/problems/encode-and-decode-tinyurl/description/?envType=problem-list-v2&envId=string

class Codec:
    base_url = "https://leet.code/{url_id}"
    urls = {}

    def encode(self, longUrl: str) -> str:
        """Encodes a URL to a shortened URL.
        """
        url_id = str(hash(longUrl))[:6]
        self.urls[url_id] = longUrl
        return self.base_url.format(url_id=url_id)
        

    def decode(self, shortUrl: str) -> str:
        """Decodes a shortened URL to its original URL.
        """
        url_id = shortUrl[-6:]
        return self.urls[url_id]
    
codec = Codec()
url = "https://leetcode.com/problems/design-tinyurl"

print(codec.decode(codec.encode(url)))