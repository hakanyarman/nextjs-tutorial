// <Link> componenti ile client side navigation yapılır.ve sayfa yenilenmeden navigation yapılır.
// <a></a> tagleri ile server side navigation yapılır. ve sayfa yenilenir

// nextjs de react SPA da olduğu gibi browser uygulamanın tüm kodlarını bölmez.nexts kodları route segmentlerine göre böler.
// bu yüzden belli bir sayfadaki hata uygulamanın geri kalan sayfalarının çalışmasını engellemez.
// ayrıca browser Link componentini gördüğünde nextjs Link in içindeki route'u yani sayfayı o sayfaya gidilmeden önce arkaplanda yükler bu yüzden sayfalar arası geçiş çok hızlıdır.

// şu an hangi linkteyiz onu nasıl anlarız?

//Yaygın bir kullanıcı arayüzü modeli, kullanıcıya o anda hangi sayfada bulunduğunu belirten aktif bir bağlantı göstermektir.  Bunu yapmak için kullanıcının mevcut yolunu URL'den almanız gerekir.  Next.js, yolu kontrol etmek ve bu modeli uygulamak için kullanabileceğiniz usePathname() adında bir hook sağlar.
