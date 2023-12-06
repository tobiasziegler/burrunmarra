export interface Item {
	wiradjuri: string;
	english: string;
	image: string;
	credit: string;
}

export interface Game {
	slug: string;
	name: string;
	items: Item[];
	target?: number;
}

export const games: Game[] = [
	{
		slug: 'nouns',
		name: 'Nouns',
		items: [
			{
				wiradjuri: 'bulanbulan',
				english: 'Crimson Rosella',
				image: '640px-Platycercus_elegans_Wilsons_Prom.jpg',
				credit:
					'By JJ Harrison (https://www.jjharrison.com.au/) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=9428025'
			},
			{
				wiradjuri: 'mulbirrang',
				english: 'Eastern Rosella',
				image: '640px-Platycercus_eximius_diemenensis_male.jpg',
				credit:
					'By JJ Harrison (https://www.jjharrison.com.au/) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=10756820'
			},
			{
				wiradjuri: 'gurawiny',
				english: 'flowers',
				image: '640px-Flowers_for_Plantitos_and_Plantitas_2.jpg',
				credit:
					'By Elmer B. Domingo - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=98817550'
			},
			{
				wiradjuri: 'yinaa',
				english: 'woman',
				image: '577px-Woman_at_Lovers_Bridge_Tanjung_Sepat_(cropped).jpg',
				credit:
					'By John Ragai - https://www.flickr.com/photos/johnragai/50273438846/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=101589025'
			},
			{
				wiradjuri: 'dhindha',
				english: 'ball',
				image: '640px-Wilson_100_Tennis_Ball_in_Backyard.jpg',
				credit:
					'By Noah Wulf - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=95604565'
			},
			{
				wiradjuri: 'galigal',
				english: 'knife',
				image: '640px-Morakniv_Basic_511_Carbon_Steel_5.jpg',
				credit:
					'By Lixeiden - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=108279960'
			},
			{
				wiradjuri: 'garba',
				english: 'fork',
				image: '640px-18-8_stainless_steel_fork_1.jpg',
				credit:
					'By Yapparina - Own work, CC0, https://commons.wikimedia.org/w/index.php?curid=67011521'
			},
			{
				wiradjuri: 'dyumbag',
				english: 'sheep',
				image: '640px-Sheep-1822137_1920.jpg',
				credit:
					'By Rudy and Peter Skitterians - https://pixabay.com/vi/photos/cừu-tò-mò-tìm-trang-trại-động-vật-1822137/, CC0, https://commons.wikimedia.org/w/index.php?curid=94068182'
			},
			{
				wiradjuri: 'ngamu',
				english: 'milk',
				image: '718px-Glass_of_Milk_(33657535532).jpg',
				credit:
					'By NIAID - Glass of Milk, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=82983911'
			},
			{
				wiradjuri: 'yurung',
				english: 'rain',
				image: '640px-Purple_rain_on_roof.jpg',
				credit:
					'By W.carter - Own work, CC0, https://commons.wikimedia.org/w/index.php?curid=69918182'
			},
			{
				wiradjuri: 'wuba',
				english: 'hollow',
				image: '540px-Bangalay-bird-hollow.jpg',
				credit:
					'By Geekstreet - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=53762743'
			},
			{
				wiradjuri: 'dyirribang',
				english: 'old man',
				image: 'donald-teel-wCIDfKBMDHE-unsplash.jpg',
				credit:
					'Photo by Donald Teel CC0 on Unsplash, https://unsplash.com/photos/mans-portrait-photography-wCIDfKBMDHEUnsplash'
			}
		]
	}
];
