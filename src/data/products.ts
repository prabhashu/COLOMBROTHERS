export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  discount?: number;
}
export const products: Product[] = [
// BEER (15 products)
{
  id: 1,
  name: 'Craft IPA Selection',
  price: 34.99,
  originalPrice: 45.99,
  discount: 24,
  category: 'Beer',
  image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&h=800&fit=crop',
  description: 'A curated selection of our finest craft IPAs. Hoppy, citrusy, and refreshing. Perfect for summer gatherings.',
  rating: 4.5,
  reviews: 89
}, {
  id: 2,
  name: 'Premium Lager 6-Pack',
  price: 18.99,
  category: 'Beer',
  image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&h=800&fit=crop',
  description: 'Crisp and clean lager with a smooth finish. Perfect for any occasion.',
  rating: 4.3,
  reviews: 156
}, {
  id: 3,
  name: 'Belgian Wheat Beer',
  price: 24.99,
  category: 'Beer',
  image: 'https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=800&h=800&fit=crop',
  description: 'Light and refreshing wheat beer with notes of coriander and orange peel.',
  rating: 4.6,
  reviews: 92
}, {
  id: 4,
  name: 'Dark Stout Porter',
  price: 28.5,
  category: 'Beer',
  image: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=800&h=800&fit=crop',
  description: 'Rich, full-bodied stout with chocolate and coffee notes. A winter favorite.',
  rating: 4.7,
  reviews: 78
}, {
  id: 5,
  name: 'Pale Ale Variety Pack',
  price: 32.0,
  category: 'Beer',
  image: 'https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2024/04/05145546/361740803.sweetwater.anniversary.party-155-scaled.jpg',
  description: 'Mix of pale ales from award-winning breweries. Discover your new favorite.',
  rating: 4.4,
  reviews: 134
}, {
  id: 6,
  name: 'German Pilsner',
  price: 22.99,
  category: 'Beer',
  image: 'https://i0.wp.com/absolutebeer.com/wp-content/uploads/2019/06/AB-Category-German-Pilsner-Photo.jpg?fit=640%2C640&ssl=1',
  description: 'Authentic German pilsner with a crisp, clean taste and floral hop aroma.',
  rating: 4.5,
  reviews: 167
}, {
  id: 7,
  name: 'Amber Ale Collection',
  price: 26.99,
  category: 'Beer',
  image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=800&h=800&fit=crop',
  description: 'Smooth amber ales with caramel malt character and balanced hop bitterness.',
  rating: 4.3,
  reviews: 89
}, {
  id: 8,
  name: 'Session IPA 12-Pack',
  price: 38.99,
  category: 'Beer',
  image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&h=800&fit=crop',
  description: 'Lower ABV IPA with full hop flavor. Perfect for long sessions with friends.',
  rating: 4.6,
  reviews: 201
}, {
  id: 9,
  name: 'Sour Fruit Beer',
  price: 29.99,
  category: 'Beer',
  image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&h=800&fit=crop',
  description: 'Tart and refreshing sour beer with real fruit additions. A unique taste experience.',
  rating: 4.2,
  reviews: 67
}, {
  id: 10,
  name: 'Wheat Beer 6-Pack',
  price: 21.5,
  category: 'Beer',
  image: 'https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=800&h=800&fit=crop',
  description: 'Unfiltered wheat beer with a cloudy appearance and smooth, creamy texture.',
  rating: 4.4,
  reviews: 112
}, {
  id: 11,
  name: 'Imperial Stout',
  price: 35.99,
  category: 'Beer',
  image: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=800&h=800&fit=crop',
  description: 'Bold, high-ABV stout with intense flavors of dark chocolate and espresso.',
  rating: 4.8,
  reviews: 145
}, {
  id: 12,
  name: 'Hefeweizen',
  price: 23.5,
  category: 'Beer',
  image: 'https://www.hopculture.com/wp-content/uploads/2021/08/liveoak-hefeweizen2-LEAD.jpg',
  description: 'Traditional German wheat beer with banana and clove notes. Unfiltered perfection.',
  rating: 4.5,
  reviews: 98
}, {
  id: 13,
  name: 'Double IPA',
  price: 36.99,
  category: 'Beer',
  image: 'https://truestorybrewing.com/wp-content/uploads/2022/07/Double-IPA-2.jpg',
  description: 'Intensely hoppy double IPA with tropical fruit flavors and high ABV.',
  rating: 4.7,
  reviews: 176
}, {
  id: 14,
  name: 'Brown Ale',
  price: 24.5,
  category: 'Beer',
  image: 'https://homebrewersassociation.org/wp-content/uploads/2021/04/Barleywine-600x400.jpg',
  description: 'Malty brown ale with nutty and caramel flavors. Easy drinking classic.',
  rating: 4.3,
  reviews: 87
}, {
  id: 15,
  name: 'Barleywine',
  price: 42.99,
  category: 'Beer',
  image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&h=800&fit=crop',
  description: 'Strong ale with complex malt character. Ages beautifully like wine.',
  rating: 4.6,
  reviews: 124
},
// SPIRITS (20 products)
{
  id: 16,
  name: 'Premium Aged Whiskey',
  price: 69.99,
  originalPrice: 89.99,
  discount: 22,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&h=800&fit=crop',
  description: 'A smooth, rich whiskey aged for 12 years in oak barrels. Notes of vanilla, caramel, and smoke.',
  rating: 4.8,
  reviews: 124
}, {
  id: 17,
  name: 'Crystal Clear Vodka',
  price: 44.99,
  originalPrice: 59.99,
  discount: 25,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=800&fit=crop',
  description: 'Triple distilled for ultimate purity. Smooth enough to drink neat or perfect for cocktails.',
  rating: 4.7,
  reviews: 210
}, {
  id: 18,
  name: 'London Dry Gin',
  price: 38.5,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=800&fit=crop',
  description: 'Classic botanical blend with prominent juniper notes. Essential for the perfect G&T.',
  rating: 4.4,
  reviews: 92
}, {
  id: 19,
  name: 'Golden Aged Rum',
  price: 29.99,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1614313511387-1436a4480ebb?w=800&h=800&fit=crop',
  description: 'Aged golden rum with notes of molasses and tropical fruits. Excellent for tiki cocktails.',
  rating: 4.3,
  reviews: 67
}, {
  id: 20,
  name: 'Premium Tequila Reposado',
  price: 54.99,
  category: 'Spirits',
  image: 'https://bodegaslacatedral.com/cdn/shop/files/Tequila_patron_reposado_bodegas_la_catedral.jpg?v=1704478196&width=1214',
  description: 'Aged in oak barrels for 6 months. Smooth agave flavor with hints of vanilla and oak.',
  rating: 4.6,
  reviews: 143
}, {
  id: 21,
  name: 'Single Malt Scotch',
  price: 89.99,
  category: 'Spirits',
  image: 'https://www.hiproof.com/cdn/shop/files/IMG-8611.jpg?v=1715306381&width=1214',
  description: 'Highland single malt with complex flavors of peat, honey, and dried fruit.',
  rating: 4.9,
  reviews: 187
}, {
  id: 22,
  name: 'Bourbon Whiskey',
  price: 49.99,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=800&fit=crop',
  description: 'Kentucky straight bourbon with notes of caramel, vanilla, and toasted oak.',
  rating: 4.5,
  reviews: 156
}, {
  id: 23,
  name: 'Premium Vodka',
  price: 39.99,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=800&fit=crop',
  description: 'Ultra-smooth vodka distilled from premium wheat. Perfect for martinis.',
  rating: 4.4,
  reviews: 98
}, {
  id: 24,
  name: 'Spiced Rum',
  price: 32.99,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1614313511387-1436a4480ebb?w=800&h=800&fit=crop',
  description: 'Caribbean spiced rum with notes of vanilla, cinnamon, and nutmeg.',
  rating: 4.3,
  reviews: 112
}, {
  id: 25,
  name: 'Japanese Whisky',
  price: 95.0,
  category: 'Spirits',
  image: 'https://assets.cntraveller.in/photos/64ccdbda7f4c9f4cc0cc8462/4:3/w_1704,h_1278,c_limit/japanese%20whiskey%20lead.jpg',
  description: 'Award-winning Japanese whisky with delicate floral and fruity notes.',
  rating: 4.9,
  reviews: 234
}, {
  id: 26,
  name: 'Botanical Gin',
  price: 42.5,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=800&fit=crop',
  description: 'Craft gin infused with 12 botanicals including lavender and rose petals.',
  rating: 4.6,
  reviews: 89
}, {
  id: 27,
  name: 'Cognac VSOP',
  price: 78.99,
  category: 'Spirits',
  image: 'https://shop.cognatheque.com/1382-large_default/cognac-courvoisier-vsop.jpg',
  description: 'French cognac aged for at least 4 years. Rich and complex with dried fruit notes.',
  rating: 4.7,
  reviews: 167
}, {
  id: 28,
  name: 'Irish Whiskey',
  price: 44.99,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=800&fit=crop',
  description: 'Smooth triple-distilled Irish whiskey with honey and vanilla notes.',
  rating: 4.5,
  reviews: 134
}, {
  id: 29,
  name: 'Mezcal Artesanal',
  price: 62.99,
  category: 'Spirits',
  image: 'https://elcolibrishop.com/wp-content/uploads/2024/10/OAXACA-TOBALA.jpeg',
  description: 'Handcrafted mezcal with smoky agave flavor and earthy undertones.',
  rating: 4.4,
  reviews: 76
}, {
  id: 30,
  name: 'Rye Whiskey',
  price: 52.99,
  category: 'Spirits',
  image: 'https://assets.bonappetit.com/photos/691e201730a819308b306241/16:9/w_2560%2Cc_limit/20251007_01_Rye%2520Whiskey%2520Taste%2520Test_043_FINAL.jpg',
  description: 'Spicy rye whiskey with notes of black pepper, cinnamon, and dried cherries.',
  rating: 4.6,
  reviews: 145
}, {
  id: 31,
  name: 'Brandy XO',
  price: 85.0,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&h=800&fit=crop',
  description: 'Extra old brandy aged for 10+ years. Luxurious and complex.',
  rating: 4.8,
  reviews: 156
}, {
  id: 32,
  name: 'White Rum',
  price: 26.99,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1614313511387-1436a4480ebb?w=800&h=800&fit=crop',
  description: 'Clean, light rum perfect for mojitos and daiquiris. Caribbean classic.',
  rating: 4.2,
  reviews: 98
}, {
  id: 33,
  name: 'Amaretto Liqueur',
  price: 34.99,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=800&fit=crop',
  description: 'Sweet almond liqueur from Italy. Perfect for dessert cocktails.',
  rating: 4.4,
  reviews: 112
}, {
  id: 34,
  name: 'Absinthe',
  price: 68.0,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=800&fit=crop',
  description: 'Traditional green absinthe with anise and wormwood. The green fairy.',
  rating: 4.3,
  reviews: 67
}, {
  id: 35,
  name: 'Tennessee Whiskey',
  price: 46.99,
  category: 'Spirits',
  image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&h=800&fit=crop',
  description: 'Charcoal-filtered Tennessee whiskey. Smooth and mellow with maple notes.',
  rating: 4.5,
  reviews: 189
},
// WINE (12 products)
{
  id: 36,
  name: 'Reserve Red Wine',
  price: 59.99,
  originalPrice: 79.99,
  discount: 25,
  category: 'Wine',
  image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=800&fit=crop',
  description: 'Full-bodied red wine with deep berry flavors and a hint of spice. Aged in French oak.',
  rating: 4.9,
  reviews: 156
}, {
  id: 37,
  name: 'Chardonnay Reserve',
  price: 45.99,
  category: 'Wine',
  image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&h=800&fit=crop',
  description: 'Elegant white wine with notes of apple, pear, and subtle oak. Perfect with seafood.',
  rating: 4.6,
  reviews: 123
}, {
  id: 38,
  name: 'Pinot Noir',
  price: 52.99,
  category: 'Wine',
  image: 'https://cdn.shopify.com/s/files/1/0623/8899/4268/files/How_To_Serve_Pinot_Noir.jpg?v=1694869138',
  description: 'Silky red wine with cherry and raspberry notes. Pairs beautifully with duck and salmon.',
  rating: 4.7,
  reviews: 189
}, {
  id: 39,
  name: 'Sauvignon Blanc',
  price: 38.99,
  category: 'Wine',
  image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&h=800&fit=crop',
  description: 'Crisp white wine with citrus and tropical fruit flavors. Refreshingly acidic.',
  rating: 4.5,
  reviews: 167
}, {
  id: 40,
  name: 'Cabernet Sauvignon',
  price: 64.99,
  category: 'Wine',
  image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=800&fit=crop',
  description: 'Bold red wine with blackcurrant, cedar, and tobacco notes. Ages beautifully.',
  rating: 4.8,
  reviews: 201
}, {
  id: 41,
  name: 'Rosé Wine',
  price: 34.99,
  category: 'Wine',
  image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&h=800&fit=crop',
  description: 'Dry rosé with strawberry and watermelon notes. Perfect for summer afternoons.',
  rating: 4.4,
  reviews: 134
}, {
  id: 42,
  name: 'Merlot Reserve',
  price: 48.99,
  category: 'Wine',
  image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=800&fit=crop',
  description: 'Smooth red wine with plum and chocolate notes. Velvety finish.',
  rating: 4.6,
  reviews: 145
}, {
  id: 43,
  name: 'Champagne Brut',
  price: 89.99,
  category: 'Wine',
  image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&h=800&fit=crop',
  description: 'Elegant French champagne with fine bubbles and notes of brioche and citrus.',
  rating: 4.9,
  reviews: 178
}, {
  id: 44,
  name: 'Shiraz',
  price: 42.99,
  category: 'Wine',
  image: 'https://cdn-prd-02.pnp.co.za/sys-master/images/hd9/h9c/11392924549150/silo-product-image-v2-28Mar2024-180110-6001506911795-Straight_on-217898-138_400Wx400H',
  description: 'Bold Australian shiraz with blackberry and pepper notes. Full-bodied and intense.',
  rating: 4.5,
  reviews: 167
}, {
  id: 45,
  name: 'Prosecco',
  price: 28.99,
  category: 'Wine',
  image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&h=800&fit=crop',
  description: 'Italian sparkling wine with apple and pear flavors. Light and festive.',
  rating: 4.4,
  reviews: 198
}, {
  id: 46,
  name: 'Malbec',
  price: 39.99,
  category: 'Wine',
  image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=800&fit=crop',
  description: 'Argentinian malbec with dark fruit and cocoa notes. Rich and smooth.',
  rating: 4.6,
  reviews: 143
}, {
  id: 47,
  name: 'Riesling',
  price: 36.5,
  category: 'Wine',
  image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&h=800&fit=crop',
  description: 'German riesling with peach and honey notes. Off-dry and aromatic.',
  rating: 4.5,
  reviews: 121
},
// ARRACK (4 products)
{
  id: 48,
  name: 'Ceylon Arrack',
  price: 42.0,
  category: 'Arrack',
  image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=800&fit=crop',
  description: 'Traditional Sri Lankan spirit made from coconut flower sap. Unique flavor profile.',
  rating: 4.6,
  reviews: 78
}, {
  id: 49,
  name: 'Premium Coconut Arrack',
  price: 48.5,
  category: 'Arrack',
  image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=800&fit=crop',
  description: 'Aged coconut arrack with smooth, complex flavors. A local treasure.',
  rating: 4.7,
  reviews: 92
}, {
  id: 50,
  name: 'Special Reserve Arrack',
  price: 55.0,
  category: 'Arrack',
  image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&h=800&fit=crop',
  description: 'Premium aged arrack with rich, distinctive character. Perfect for connoisseurs.',
  rating: 4.8,
  reviews: 67
}, {
  id: 51,
  name: 'Double Distilled Arrack',
  price: 52.0,
  category: 'Arrack',
  image: 'https://www.finespirits.my/wp-content/uploads/2020/12/2-DD-LED-BOARD-min-scaled.jpg',
  description: 'Extra smooth arrack with refined taste. Double distilled for purity.',
  rating: 4.7,
  reviews: 84
},
// TODDY (3 products)
{
  id: 52,
  name: 'Fresh Toddy',
  price: 12.99,
  category: 'Toddy',
  image: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&h=800&fit=crop',
  description: 'Naturally fermented coconut sap. A traditional local favorite with sweet and sour notes.',
  rating: 4.2,
  reviews: 45
}, {
  id: 53,
  name: 'Palm Toddy',
  price: 14.5,
  category: 'Toddy',
  image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=800&h=800&fit=crop',
  description: 'Fresh palm toddy with natural sweetness. Best enjoyed chilled.',
  rating: 4.3,
  reviews: 56
}, {
  id: 54,
  name: 'Aged Toddy',
  price: 16.99,
  category: 'Toddy',
  image: 'https://store.stelmos.com/cdn/shop/articles/Untitled-2-3_1x_1.jpg?v=1761847904',
  description: 'Fermented toddy with stronger flavor profile. A traditional delicacy.',
  rating: 4.1,
  reviews: 38
}];