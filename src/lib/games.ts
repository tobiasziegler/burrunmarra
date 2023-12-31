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
	},
	{
		slug: 'paired-nouns',
		name: 'Paired nouns',
		items: [
			{
				wiradjuri: 'mulbirrang-galang-bu bulanbulan-bu',
				english: 'Eastern Rosellas and Crimson Rosella also',
				image: 'AdobeStock_3653132.jpeg',
				credit:
					'Licensed via my Adobe Stock subscription: https://stock.adobe.com/au/images/sittichtranke/3653132?prev_url=detail'
			},
			{
				wiradjuri: 'garba-bu galigal-bu',
				english: 'fork and knife also',
				image:
					'lossy-page1-640px-Maison_Cardeilhac_-_Dessert_Knife_and_Fork_-_2003.245_-_Cleveland_Museum_of_Art.tif.jpg',
				credit:
					'By Maison Cardeilhac - https://clevelandart.org/art/2003.245, CC0, https://commons.wikimedia.org/w/index.php?curid=77158981'
			},
			{
				wiradjuri: 'mulbirrang wuba-dha',
				english: 'Eastern Rosella in/by a hollow',
				image: '640px-Female_Eastern_Rosella_in_a_tree_hollow_at_Lake_Albert.jpg',
				credit:
					'By Bidgee, CC BY-SA 3.0 au, https://commons.wikimedia.org/w/index.php?curid=21845171'
			},
			{
				wiradjuri: 'dyirribang yurung-ga',
				english: 'old man in the rain',
				image: 'AdobeStock_625952538.jpeg',
				credit:
					'Licensed via my Adobe Stock subscription: https://stock.adobe.com/au/images/portrait-of-the-biblical-noah-waiting-for-better-weather-and-the-return-of-the-dove-christian-illustration/625952538?prev_url=detail'
			}
		]
	},
	{
		slug: 'phrases-nouns-and-verbs',
		name: 'Phrases - nouns and verbs',
		items: [
			{
				wiradjuri: 'bulanbulan gurawiny dharra',
				english: 'Crimson Rosella eating flowers',
				image: 'AdobeStock_510164231.jpeg',
				credit:
					'Licensed via my Adobe Stock subscription: https://stock.adobe.com/au/images/australian-native-crimson-rosella-parrot-perched-and-eating-flowers-from-a-native-bush-in-wilsons-promontory-national-park-victoria/510164231?prev_url=detail'
			},
			{
				wiradjuri: 'yinaa dhindha narrundirra',
				english: 'woman kicking ball',
				image: '640px-AusChi3_-_Kerr6_(51555184377).jpg',
				credit:
					'By LittleBlinky - AusChi3 - Kerr6, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=112037552'
			},
			{
				wiradjuri: 'dyumbag gudha ngamu widyarra',
				english: 'baby sheep drinking milk',
				image: '640px-Feeding_black_lamb.jpg',
				credit:
					'By Andrei Niemimäki from Turku, Finland - Feeding black lamb, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=9753654'
			},
			{
				wiradjuri: 'yinaa gurawiny gaambilanha',
				english: 'woman holding flowers',
				image: '540px-Woman_with_Flowers_-_Dolores_Hidalgo_-_Mexico_(38394962885).jpg',
				credit:
					'By Adam Jones from Kelowna, BC, Canada - Woman with Flowers - Dolores Hidalgo - Mexico, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=65341753'
			},
			{
				wiradjuri: 'dyirribang galigal gaambilanha',
				english: 'old man holding a knife',
				image: 'AdobeStock_275836746.jpeg',
				credit:
					'Licensed via my Adobe Stock subscription: https://stock.adobe.com/au/images/old-man-attack-with-knife-in-city/275836746?prev_url=detail'
			},
			{
				wiradjuri: 'dyirribang dyumbag gudha gaambilanha',
				english: 'old man holding a baby sheep',
				image: 'AdobeStock_672995533.jpeg',
				credit:
					'Licensed via my Adobe Stock subscription: https://stock.adobe.com/au/images/a-pencil-drawing-of-an-old-man-holding-a-baby-sheep/672995533?prev_url=detail'
			},
			{
				wiradjuri: 'dyirribang-galang dhindha-galang wanhanha',
				english: 'old men throwing balls',
				image: 'AdobeStock_242506096.jpeg',
				credit:
					'Licensed via my Adobe Stock subscription: https://stock.adobe.com/au/images/old-men-playing-a-game-of-boules-together/242506096?prev_url=detail'
			},
			{
				wiradjuri: 'yinaa ngamu widyarra',
				english: 'woman drinking milk',
				image: 'AdobeStock_49443348.jpeg',
				credit:
					'Licensed via my Adobe Stock subscription: https://stock.adobe.com/au/images/young-woman-drinking-milk-in-kitchen/49443348?prev_url=detail'
			}
		]
	}
];
