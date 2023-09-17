import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  kursListesi: { baslik: string, detay: string, aciklama: string, yarismaHazirlik: string[] }[] = [
    {
        baslik: 'Matematik Yarışmalarına Hazırlık',
        detay: 'Matematik Yarışmalarına Hazırlık',
        aciklama: 'Bu kurs, erken yaşta matematik yeteneklerini geliştirmek isteyen öğrenciler için özel olarak tasarlanmıştır. Temel matematik konularını derinlemesine incelemeyi içerir ve öğrencileri matematik yarışmalarına hazırlamak için özel hazırlanmış içerik sunar. Kanguru Matematik, Caribou Matematik, Tales Matematik Yarışması, Türkiye Matematik Yarışması gibi çok sayıda yarışmaya hazırlamaya uygun müfredat sunar.',
        yarismaHazirlik: ['Kanguru Matematik', 'Caribou Matematik', 'Tales Matematik Yarışması', 'Türkiye Matematik Yarışması']
    },
    {
        baslik: 'Matematik Olimpiyatlarına Hazırlık',
        detay: 'Matematik Olimpiyatlarına Hazırlık',
        aciklama: 'Matematik olimpiyatları, öğrencilerin problem çözme yeteneklerini sınayan ulusal ve uluslararası yarışmaları içerir. Zekakoleji, öğrencilerin bu yarışmalara en iyi şekilde hazırlanmalarını sağlamak için deneyimli öğretmenler tarafından hazırlanmış ders içerikleri sunar. Matematik dehasını geliştiren, karmaşık problemleri çözmeye odaklanan bu dersler, öğrencilerin analitik düşünme yeteneklerini zirveye taşır. Matematik yarışmalarından farklı olarak doğrudan Tubitak Bilim Olimpiyatları 1. ve 2. aşamaya hazırlamaya yönelik daha kapsamlı bir müfredat içerir.',
        yarismaHazirlik: ['Tubitak Bilim Olimpiyatları']
    },
    {
        baslik: 'Zeka Oyunları',
        detay: 'Zeka Oyunları',
        aciklama: 'Zeka oyunları, mantık, strateji ve problem çözme becerilerini geliştirmek isteyen öğrenciler için mükemmel bir seçenektir. Bu kurs, çocukların zihinsel esnekliklerini artırmalarına yardımcı olurken eğlenceli ve interaktif bir öğrenme deneyimi sunar. Süreç içinde yeteneklerini geliştirerek, eğlenerek öğrenen çocuklar aynı zamanda çeşitli yarışmalara katılarak öğrendiklerini uygulama alanına taşıyabilirler. Tüm bu süreçlerde deneyimli öğretmenlerimiz size rehberlik eder. Öğrenciler Türk Zeka Vakfı Yarışması, Türk Beyin Takımı Yarışması, TAZOF Oyuncu Beyinler Turnuvası gibi yarışmalarda kendilerini gösterme fırsatı bulurlar.',
        yarismaHazirlik: ['Türk Zeka Vakfı Yarışması', 'Türk Beyin Takımı Yarışması', 'TAZOF Oyuncu Beyinler Turnuvası']
    },
    {
        baslik: 'Kriptoloji',
        detay: 'Kriptoloji',
        aciklama: 'Kriptoloji kursu, öğrencilere şifreleme ve şifre çözme konularında temel bilgiler sunar. Bu, öğrencilerin matematiksel düşünme becerilerini kullanarak bilgisayar güvenliği ve gizliliği hakkında erken yaşta temel bir anlayış kazanmalarına yardımcı olur. Aynı zamanda öğrenciler CryptoMath Şifrelerle Matematik Yarışması gibi bu alanda yapılan yarışmalara katılarak benzersiz bir deneyim yaşarlar.',
        yarismaHazirlik: ['CryptoMath Şifrelerle Matematik Yarışması']
    },
    {
        baslik: 'Kodlama',
        detay: 'Kodlama',
        aciklama: 'Kodlama kursu, erken yaşta öğrencilere temel programlama kavramlarını ve bilgisayar bilimini öğretir. Öğrenciler, basit oyunlar ve projeler oluşturarak kodlama becerilerini pratiğe dökerler. Aynı zamanda bilgisayar olimpiyatlarının temelini oluşturan programlamaya giriş konuları da içerir.',
        yarismaHazirlik: ['Bilgisayar Olimpiyatları']
    },
    {
        baslik: 'Bilgisayar Olimpiyatlarına Hazırlık',
        detay: 'Bilgisayar Olimpiyatlarına Hazırlık',
        aciklama: 'Bilgisayar olimpiyatları, programlama becerilerini ve algoritmik düşünmeyi öne çıkaran yarışmalardır. Programlama dillerini öğrenmek, algoritmaları oluşturmak ve zorlu problemleri çözmek için geliştirilen bu dersler, öğrencileri ulusal ve uluslarası bilgisayar olimpiyatlarına hazırlar. Tubitak tarafından her yıl yapılan bilim olimpiyatlarının ortaokul bilgisayar katagorisi, C programlama dili dışında temel matematik konuları içerir.',
        yarismaHazirlik: ['Tubitak Bilim Olimpiyatları']
    },
    {
        baslik: 'Özel Okul Sınavlarına Hazırlık',
        detay: 'Özel Okul Sınavlarına Hazırlık',
        aciklama: 'Bu kurs, öğrencileri özel okul sınavlarına hazırlamak için tasarlanmıştır. Öğrencilere sınav teknikleri, problem çözme becerileri ve sınav stratejileri konusunda rehberlik eder. Ara dönemde yapılan bursluluk sınavlarına hazırlık dışında LGS’ye ek olarak kendi sınavını yapan çok sayıda kurumun sınavlarına hazırlamayı içerir.',
        yarismaHazirlik: ['Özel Okul Sınavları']
    },
    {
        baslik: 'LGS ve Okul Destek Kursları',
        detay: 'LGS ve Okul Destek Kursları',
        aciklama: 'LGS ve okul derslerine yönelik destek kurslarımız, öğrencilerin akademik başarılarını artırmalarına yardımcı olur. Öğrencilere temel konuları kavramaları ve sınavlara hazırlanmaları için gereken bilgi ve becerileri kazandırmayı amaçlar. LGS ve okul sınavlarına hazırlık sürecini kolaylaştırırken, öğrencilerin güvenlerini artırır. Yeni nesil problemler noktasında stratejiler sunarak öğrenciye çözme teknikleri anlamında yardımcı olur.',
        yarismaHazirlik: ['LGS', 'Okul Sınavları']
    }
];


  constructor() { }

  ngOnInit(): void {
  }

}
