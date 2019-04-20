client.on('guildMemberAdd', member => {
let logChannel = member.guild.channels.find('name', 'join-leave');

  let logEmbed = new Discord.RichEmbed()
  .setAuthor("Invites Rewards™ | Logs") 
  .setDescription(member.user.username + " **This Member** `Joined` **__Invites Rewards™__ With ID** (" + member.user.id + ")")
  .setColor('RANDOM')
  .setFooter("Welcome To Invites Rewards™ Have A Good Time With Gathering Rewards With Inviting our Friends", member.user.displayAvatarURL)
  .setTimestamp()
  logChannel.send(logEmbed);
})
client.on('guildMemberRemove', member => {
let logChannel = member.guild.channels.find('name', 'join-leave');

  let logEmbed = new Discord.RichEmbed()
  .setAuthor("Invites Rewards™ | Logs") 
    .setDescription(member.user.username + " **This Member** `Left` **__Invites Rewards™__** **With ID** (" + member.user.id + ")")
  .setFooter("Good Bye We Won't Miss You !", member.user.displayAvatarURL)
  .setColor('RANDOM')
  .setTimestamp()
  logChannel.send(logEmbed);
})
client.on('messageDelete', async (message) => {
    const logs = message.guild.channels.find('name', 'bot-log');
    if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
        await message.guild.createChannel('bot-log', 'text');
    }
    if (!logs) {
        return console.log('The logs channel does not exist and cannot be created')
    }
    const entry = await message.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE'
    }).then(audit => audit.entries.first())
    let user;
    if (entry.extra.channel.id === message.channel.id && (entry.target.id === message.author.id) && (entry.createdTimestamp > (Date.now() - 5000)) && (entry.extra.count >= 1)) {
        user = entry.executor.username
    } else {
        user = message.author
    }
    const logembed = new Discord.RichEmbed()
        //.setTitle('Message Deleted')
        .setAuthor(user.tag, message.author.displayAvatarURL)
        .addField(`**Message sent by ${message.author.username}> deleted in ${message.channel.name}**\n\n`, message.content)
        .setColor(message.guild.member(client.user).displayHexColor)
        .setFooter(`<#${message.channel.id}>`)
        .setTimestamp()
    //console.log(entry)
    logs.send(logembed);
})
client.on('message', msg => {

  if(msg.content.includes("gn")){
    if(msg.content.includes("GN")){
    }
    if(msg.content.includes("goodnight")){
    }
if(msg.content.includes("GOODNIGHT")){
    }
   msg.delete();
   msg.reply("**Good Night** :full_moon: :smile:")
	  var embed = new Discord.RichEmbed
	  .setTitle(":full_moon:")
	  message.channel.send(embed)
  }
});
	client.on('message', msg => {

  if(msg.content.includes("gm")){
    if(msg.content.includes("GM")){
    }
    if(msg.content.includes("goodmorning")){
    }
if(msg.content.includes("GOODMORNING")){
    }
   msg.delete();
   msg.reply("**Good Morning!** :sunny: :smile:")
	  var embed = new Discord.RichEmbed
	  .setTitle(":sunny:")
	  message.channel.send(embed)
  }
});
	client.on('guildMemberAdd', member => {
    member.guild.channels.get('531168312353226753').setName(`Total Users: ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('531168312353226753').setName(`Total Users: ${member.guild.memberCount}`);
});


let Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
const talkedRecently = new Set();
let cmd = message.content.split(' ').slice(1,2).join(' ');

let id = message.content.split(' ').slice(1,2).join(' ');

 let User = message.guild.members.get(args[0]); 
  let dMsg = message.content.split(' ').slice(2).join(' ');


if(!cmd||cmd==='netflix'){
	if (message.channel.name !== 'gen-premium') return message.reply(`Bruh ! You Know You Cant Use That Of Course Right? + You Need @Premium Gen Role + You must go to the channel #gen-premium To Make This Command Works `);
    

var list = [
	
"brunofregnani665@gmail.com:123bruno",
"lordmegaminer2@gmail.com:Minecraft29",
"arianmoradi@icloud.com:Jolanta52",
"tory.johnson30@gmail.com:chaos123",
"elay@gmail.com:sparrows",
"flavioeng10@gmail.com:wdflavio538248",
"lincoln_frozt30@yahoo.com:64825goe",
"kaliko@gmail.com:BEV6348",
"weiler1027@yahoo.com:jasperdog",
"jcmacipe@gmail.com:hivapiti84",
"sfzm15@yahoo.com:h81401991,Free,",
"smacku2b@aol.com:Godsmack4",
"brandyboswell@ymail.com:2001coco",
"elluqitaaz@live.com.ar:newells",
"marcopaulocaetano@gmail.com:Lastson1",
"jake.latouf@yahoo.com:skateboard22",
"wmmillar@gmail.com:Ibanez28",
"apamphilon@yahoo.com:Muse2304",
"alexfeelthat@gmail.com:1a2s3d4f",
"ajloucks@gmail.com:younoget",
"jdnessmith@gmail.com:shadow01",
"aprice0101@gmail.com:99919pass",
"dima.brol@gmail.com:heyn1gga",
"dklo44@hotmail.com:derek0131",
"lmartin77@q.com:mickey11",
"rhiannon_newton@hotmail.com:August1991",
"zietsilya@gmail.com:pbtwbkmz",
"zietsmanwillem@gmail.com:willem101",
"ziga.gale@gmail.com:efbcdcb96397",
"zyaayz@gmail.com:shithead2",
"zanobi75@gmail.com:pinkroof",
"zsutty2@gmail.com:tool0007",
"zsuzsi36@gmail.com:cecilbest1",
"zaksh1@gmail.com:123456",
"zamarkfleming@gmail.com:maxmax57",
"details@gmail.com:5xqj0Rd",
"zuguiwang@gmail.com:wang7980",
"zuhairahmad89@gmail.com:munna123",
"zoey-anna@live.co.uk:brapbrap",
"buddymaxdebbie@aol.com:flowerdew22",
"bpmanion@bex.net:brownie",
"tobbeolsson96@hotmail.com:kofYOC715",
"gihan.seneviratna@gmail.com:kaluTara2",
"yspgsh@gmail.com:cricket828pen",
"sylvias91@live.se:SAAB12453",
"aoao12@hotmail.com:za0844158050",
"lucareischl@gmx.de:reischl01",
"roewer@gmail.com:mongoose",
"dazza78@hotmail.co.uk:Lovelissa5",
"vinod.nair2000@gmail.com:aon1973",
"onlylove_ice@yahoo.com.tw:travel1022",
"sandfordj@hotmail.co.uk:19james93",
"hassnain87@hotmail.com:westfield",
"irfandhirani@gmail.com:soccer",
"sandfordj@hotmail.co.uk:19james93",
"aha2@hotmail.com:hnbtoul",
"dj_prinsassy@yahoo.com.sg:020406",
"DREAMS_NASER@HOTMAIL.COM:ma3shoqa",
"happyatif@yahoo.com:lahore",
"faheemraza@yahoo.com:ark1502",
"chieko.m@gmail.com:000155b8fb86f2c34627f9f1d6290b8fd73148d4",
"thomas.stabell@gmail.com:6bf9f212311ab8f445637c5860b97a311bf1dcd8",
"brunofregnani665@gmail.com:123bruno",
"lordmegaminer2@gmail.com:Minecraft29",
"arianmoradi@icloud.com:Jolanta52",
"tory.johnson30@gmail.com:chaos123",
"elay@gmail.com:sparrows",
"flavioeng10@gmail.com:wdflavio538248",
"lincoln_frozt30@yahoo.com:64825goe",
"kaliko@gmail.com:BEV6348",
"weiler1027@yahoo.com:jasperdog",
"jcmacipe@gmail.com:hivapiti84",
"sfzm15@yahoo.com:h81401991,Free,",
"smacku2b@aol.com:Godsmack4",
"brandyboswell@ymail.com:2001coco",
"elluqitaaz@live.com.ar:newells",
"marcopaulocaetano@gmail.com:Lastson1",
"jake.latouf@yahoo.com:skateboard22",
"wmmillar@gmail.com:Ibanez28",
"apamphilon@yahoo.com:Muse2304",
"alexfeelthat@gmail.com:1a2s3d4f",
"ajloucks@gmail.com:younoget",
"jdnessmith@gmail.com:shadow01",
"aprice0101@gmail.com:99919pass",
"dima.brol@gmail.com:heyn1gga",
"dklo44@hotmail.com:derek0131",
"lmartin77@q.com:mickey11",
"rhiannon_newton@hotmail.com:August1991",
"zietsilya@gmail.com:pbtwbkmz",
"zietsmanwillem@gmail.com:willem101",
"ziga.gale@gmail.com:efbcdcb96397",
"zyaayz@gmail.com:shithead2",
"zanobi75@gmail.com:pinkroof",
"zsutty2@gmail.com:tool0007",
"zsuzsi36@gmail.com:cecilbest1",
"zaksh1@gmail.com:123456",
"zamarkfleming@gmail.com:maxmax57",
"details@gmail.com:5xqj0Rd",
"zuguiwang@gmail.com:wang7980",
"zuhairahmad89@gmail.com:munna123",
"zoey-anna@live.co.uk:brapbrap",
"buddymaxdebbie@aol.com:flowerdew22",
"bpmanion@bex.net:brownie",
"tobbeolsson96@hotmail.com:kofYOC715",
"gihan.seneviratna@gmail.com:kaluTara2",
"yspgsh@gmail.com:cricket828pen",
"sylvias91@live.se:SAAB12453",
"aoao12@hotmail.com:za0844158050",
"lucareischl@gmx.de:reischl01",
"roewer@gmail.com:mongoose",
"dazza78@hotmail.co.uk:Lovelissa5",
"vinod.nair2000@gmail.com:aon1973",
"onlylove_ice@yahoo.com.tw:travel1022",
"sandfordj@hotmail.co.uk:19james93",
"hassnain87@hotmail.com:westfield",
"irfandhirani@gmail.com:soccer",
"sandfordj@hotmail.co.uk:19james93",
"aha2@hotmail.com:hnbtoul",
"dj_prinsassy@yahoo.com.sg:020406",
"DREAMS_NASER@HOTMAIL.COM:ma3shoqa",
"happyatif@yahoo.com:lahore",
"faheemraza@yahoo.com:ark1502",
"chieko.m@gmail.com:000155b8fb86f2c34627f9f1d6290b8fd73148d4",
"thomas.stabell@gmail.com:6bf9f212311ab8f445637c5860b97a311bf1dcd8",



];
  
  var rand = Math.floor(Math.random() * list.length);
  
  var embed = new Discord.RichEmbed()
.addField("**Your Netflix Account**", list[rand])
 .setFooter("Feel Free To Use My Gen Commands ! Unlock More Access : Fortnite Accounts Generator /// Unlock The CoolDow With Buying The Access")
.setColor("RANDOM")
  
  message.author.send(embed)
message.channel.send("**__Your Account Has Succssfully Generated !__** :thumbsup:")	
}
	if(!cmd||cmd==='fortnite'){
	if (message.channel.name !== 'gen-premium') return message.reply(`Bruh ! You Know You Cant Use That Of Course Right? + You Need @Premium Gen Role + You must go to the channel #gen-premium To Make This Command Works `);
var list = [
	
"luis14957@gmail.com:nacional11",
"x55zei@hotmail.com:madarauchiha15",
"gon7a_svn93@hotmail.com:ouroboros7",
"gerard_depa@hotmail.com:Assassin1998",
"mariacarolina100878@gmail.com:maria1978",
"agustingatica1232007@gmail.com:agustingatica123",
"juan-cox@hotmail.com:josefina1",
"davidcollazos76@gmail.com:JONATHANDAVID07",
"blackpein1995@hotmail.com:domingo26",
"adriano_94@hotmail.es:yusibeltxa2",
"kajosue53@gmail.com:estrella18",
"jhonck013124@gmail.com:jhon1924",
"fcolopezgutierrez@gmail.com:paco4626",
"alexisgonzales189@gmail.com:Silver20",
"rivamanya@hotmail.com:r23032001",
"jeanmontero26@gmail.com:Barcalona99",
"williamdestroyer0@gmail.com:domador123",
"marcelo_1999@live.com.mx:kikin100",
"ironkiss@hotmail.com:Gorosoft_01",
"claudio.9511@gmail.com:claudio7ronaldo",
"davidxdone1234@gmail.com:6462131101a",
"miguel.pozos93@gmail.com:Playgame360",
"juanperez123696@gmail.com:josue130",
"ibuzatu393@gmail.com:123iuli45",
"nestorhawk2023@gmail.com:bakerskateX7",
"vitto_199_@hotmail.com:kamar9221",
"martigarciaserra@gmail.com:sserra12",
"lledoser@gmail.com:Guitarra1",
"crewsey1997@gmail.com:colom178957",
"juancruzlangiano@outlook.com:partner658",
"arielpriarollo@hotmail.com:manuelita1",
"uantonio061@gmail.com:allstar5768",
"mario.carranza996@gmail.com:assassins246",
"xdkirito786@gmail.com:eliasxd123",
"xxgamerpvpxx@hotmail.com:atleticoloko456",
"lucasdchavez84@outlook.com:lucas1984",
"juegos.espartano@gmail.com:zero1994",
"alanolaz13@gmail.com:gabriela2",
"tashibanajota@gmail.com:fofinho1",
"camilo.gutierrezleiva@gmail.com:paramore2014",
"juanje201013@hotmail.com:Fairytail131",
"ronnyartea18@hotmail.com:roderick2",
"jfredy_024@hotmail.com:fredy1224",
"u550@outlook.com:grimmjow10",
"francisco1367x@gmail.com:francisco13",
"navarrovasquez0@gmail.com:31manuelnono",
"aldoalbravo@gmail.com:Bengala1",
"danilo23145476@hotmail.com:calavera2",
"demente_85@hotmail.com:antonella682",
"est.johnjairo@gmail.com:289jairo",
"brayanfuentes117@gmail.com:Steffany18",
"alvaroojeda4@gmail.com:pesadilla500",
"basti.ortiz87@gmail.com:7920433rex",
"gtoto3499@gmail.com:toto0905",
"jcarlosslipknot@rocketmail.com:slipknot666",
"antoniobarriosacedo@hotmail.com:lindota12",
"zombieapocalipsis067@gmail.com:compu123",
"neithan423@gmail.com:sancho18",
"rainerfiorentino@gmail.com:rainer123",
"delviegm@gmail.com:d00380038",
"ocramplaystation@hotmail.com:lovemeplease0",
"camposchamorrodiego@gmail.com:Sanches97",
"jadavi2013@gmail.com:j0083454164",
"pagnigabber@hotmail.com:danonino123",
"rodrigopresa11@hotmail.com:facu0306",
"germanqueme@live.com.ar:alpase2010",
"johancotef@gmail.com:gafas123",
"jeshugf77@gmail.com:morenit0",
"arturojr360@hotmail.com:Yateladije03",
"antonio196100091@gmail.com:angus_13",
"davidmoreno4@hotmail.com:4234370lol",
"electrucho172@gmail.com:amorsito10",
"heimendinger@hotmail.cl:juank5585",
"armando.ogaz@gmail.com:5abrilteamo",
"jorojoasg@gmail.com:matikicho008",
"otaku_yue2011@hotmail.com:Akarin12345",
"jrivasvega07@gmail.com:mamotito07",
"erickdemesa5@gmail.com:sakuragi00",
"deniselceleste@hotmail.com:lospiojis12",
"brandonbran35@gmail.com:luchu1234",
"pedro.bozmediano@gmail.com:Unsoloidolo1",
"marioernestoabc@gmail.com:Ratablank0808",
"lionel_cris321@live.com:Crislionel1",
"jhorchnuves@gmail.com:beckham456",
"jonatan.tauste@gmail.com:kovu1989",
"klasclas@gmail.com:adrian86",
"loreguitar749@gmail.com:mourat99",
"franco_lq@hotmail.com:cacona123",
"raultorres1519@hotmail.com:gamer1721",
"christiansaz@hotmail.com:chuchete86",
"camilo2724.cp@gmail.com:kl206cami9",
"emi.sabat10@gmail.com:amanda100",
"sebastian2472@gmail.com:seba2472",
"freddymunoz124@gmail.com:prototype2001",
"marwane20072007@gmail.com:alfa2007",
"jonteran@hotmail.com:txankete83",
"humberto_contreras@live.com.mx:nitro2010",
"juancala99@hotmail.com:calicampeon2005",
"hyugakiller1@gmail.com:martinjesus1",
"swordman_117@hotmail.com:rc-1207.",
"yahircantu@gmail.com:yahir1011",
"ccontreras1710@gmail.com:jotabeche40C",
"kayzen2261@gmail.com:wh23tenak",
"geekdroidkriz@gmail.com:nekrozkriz666",
"hernandezluis1185@gmail.com:unodostres0",
"jspp08@hotmail.com:jusepipi123",
"craftman623@hotmail.com:TATITO162004",
"mark_hmd@hotmail.com:duoc.2011",
"musse_bassline@outlook.com:lambofgod99",
"giancoelias@gmail.com:Barcelona21",
"aymenrabeh2003@gmail.com:adam2008",
"creeper423@gmail.com:Jasenyael1",
"rafaelmerchanaguilar@gmail.com:rafalito23",
"lordcasares@gmail.com:Edenro1448",
"javierfmov94@hotmail.com:spitfire27",
"riva.seba@gmail.com:sg178186",
"xino.16@hotmail.es:S676228232",
"lau_nqn_09@hotmail.com:panchito12345",
"lanlinbross@hotmail.com:fortec12",
"tramitespinto@gmail.com:Grand1252",
"luigiaviles2010@live.com:Rumine1999",
"kalisto_34_@hotmail.com:Kk32323234",
"canavirifloresluis@gmail.com:luis12luis",
"saymon.sanchez@hotmail.com:saymon01",
"jehosafatmortera26@gmail.com:jyj26967",
"texxxmatt@gmail.com:18210724asd",
"nacho.andaur@live.cl:178239nl",
"fabiocastaneda203@gmail.com:mariaclara10",
"csotelo@live.com.ar:Joa424608",
"angeloflow123@outlook.com:roder123",
"diegoedu2003@hotmail.es:ranma12",
"rodrigopasan@gmail.com:Ropasan24",
"zi_ivan_2009@hotmail.com:golddroger14",
"rockerogamer97@gmail.com:devilnevercry97",
"marcrodriguezfranqueza@gmail.com:Laysee2724",
"maxjbbx@gmail.com:blaceyes1",
"tyni650@hotmail.com:killthemall123",
"losvillanos200@gmail.com:mariano01",
"joseeduardosupremo@hotmail.com:joseeduardo1234",
"alexjriver1999@gmail.com:Mckl0pedia",
"braian25gomez@gmail.com:sinclave123",
"borjamorais777@gmail.com:Sobekoneps3",
"pabloguay.22@hotmail.com:cacaloca22",
"tomassoto213@hotmail.com:tomas1234",
"carloox.9@hotmail.com:carlos11",
"jano.caminya@gmail.com:JanCG2005",
"j.polanc@hotmail.com:polanco123",
"fernando.ceneri@yahoo.com:41177742fer",
"rickinolazco@gmail.com:ricardo123",
"tomas.f737@gmail.com:Walala1313",
"klop_15@hotmail.com:klop1527",
"victorgm515@gmail.com:rotciv1994",
"ysteria_25@hotmail.com:warpten25",
"diego_senior12@hotmail.com:diego1452",
"leobcc@outlook.com:naruto10",
"rodrigoberberich@gmail.com:puerta123.",
"dantyhd@gmail.com:2105asdqwe",
"sortexjuegos@gmail.com:sj123456789sj",
"gastonyacobone@gmail.com:28008para",
"jeremyvega@hotmail.cl:jeremyvega11",
"dguardia44@gmail.com:diegoguardia1",
"felipe_sgs@hotmail.com:fcd078689",
"rebe2nov@gmail.com:dayana3312",
"tar7music@gmail.com:narnia13",
"abravoleal20@gmail.com:mariana2000!",
"charlyhocks@gmail.com:loslos041191",
"cristianohenao@hotmail.com:Akalialejo1996",
"mirdavid360@gmail.com:cristo1vive",
"asdrubalfirexd@gmail.com:123456789gamerXD",
"knockedmedal34@gmail.com:mobolico12",
"javierzapata1985@gmail.com:reivaj20",
"isaiascebada@hotmail.com:Netgear1",
"pascualorenes1981@gmail.com:melapela1981",
"sebayeta@gmail.com:05051997super",
"wwe_jona_dx@hotmail.com:Saulnicola5",
"ed_316@hotmail.com:carlos96",
"genderletcrown@gmail.com:mgnjm1234",
"draco_3698@hotmail.com:polopolo123",
"doarsh2@gmail.com:doarss11",
"leandritocalderon@gmail.com:wqsaxz12",
"elviograciano@gmail.com:714a8a88",
"lordcocacola789@gmail.com:maincra12345",
"kris_b0yd@hotmail.com:7429655se",
"maxte436@hotmail.com:Animals2310",
"jesu_sb@hotmail.com:erZuli90",
"sebas.26.1996@hotmail.com:windows26",
"jnfs012@yopmail.com:juegos55",
"crisstan-47@hotmail.com:febrero07",
"ramiremauricio@gmail.com:darkdragon64",
"asanzsaez13@gmail.com:Al3jandro",
"mikel.drakost26@gmail.com:mikeflush1997",
"thegammarayo99@gmail.com:sacred12",
"pogomen20013@gmail.com:churi123",
"gabriel-colin1398@live.com:jtbt7cfd",
"johanfernandocisneros@gmail.com:malboro11",
"luis14957@gmail.com:nacional11",
"x55zei@hotmail.com:madarauchiha15",
"gon7a_svn93@hotmail.com:ouroboros7",
"gerard_depa@hotmail.com:Assassin1998",
"mariacarolina100878@gmail.com:maria1978",
"agustingatica1232007@gmail.com:agustingatica123",
"juan-cox@hotmail.com:josefina1",
"davidcollazos76@gmail.com:JONATHANDAVID07",
"blackpein1995@hotmail.com:domingo26",
"adriano_94@hotmail.es:yusibeltxa2",
"kajosue53@gmail.com:estrella18",
"jhonck013124@gmail.com:jhon1924",
"fcolopezgutierrez@gmail.com:paco4626",
"alexisgonzales189@gmail.com:Silver20",
"rivamanya@hotmail.com:r23032001",
"jeanmontero26@gmail.com:Barcalona99",
"williamdestroyer0@gmail.com:domador123",
"marcelo_1999@live.com.mx:kikin100",
"ironkiss@hotmail.com:Gorosoft_01",
"claudio.9511@gmail.com:claudio7ronaldo",
"davidxdone1234@gmail.com:6462131101a",
"miguel.pozos93@gmail.com:Playgame360",
"juanperez123696@gmail.com:josue130",
"ibuzatu393@gmail.com:123iuli45",
"nestorhawk2023@gmail.com:bakerskateX7",
"vitto_199_@hotmail.com:kamar9221",
"martigarciaserra@gmail.com:sserra12",
"lledoser@gmail.com:Guitarra1",
"crewsey1997@gmail.com:colom178957",
"juancruzlangiano@outlook.com:partner658",
"arielpriarollo@hotmail.com:manuelita1",
"uantonio061@gmail.com:allstar5768",
"mario.carranza996@gmail.com:assassins246",
"xdkirito786@gmail.com:eliasxd123",
"xxgamerpvpxx@hotmail.com:atleticoloko456",
"lucasdchavez84@outlook.com:lucas1984",
"juegos.espartano@gmail.com:zero1994",
"alanolaz13@gmail.com:gabriela2",
"tashibanajota@gmail.com:fofinho1",
"camilo.gutierrezleiva@gmail.com:paramore2014",
"juanje201013@hotmail.com:Fairytail131",
"ronnyartea18@hotmail.com:roderick2",
"jfredy_024@hotmail.com:fredy1224",
"u550@outlook.com:grimmjow10",
"francisco1367x@gmail.com:francisco13",
"navarrovasquez0@gmail.com:31manuelnono",
"aldoalbravo@gmail.com:Bengala1",
"danilo23145476@hotmail.com:calavera2",
"demente_85@hotmail.com:antonella682",
"est.johnjairo@gmail.com:289jairo",
"brayanfuentes117@gmail.com:Steffany18",
"alvaroojeda4@gmail.com:pesadilla500",
"basti.ortiz87@gmail.com:7920433rex",
"gtoto3499@gmail.com:toto0905",
"jcarlosslipknot@rocketmail.com:slipknot666",
"antoniobarriosacedo@hotmail.com:lindota12",
"zombieapocalipsis067@gmail.com:compu123",
"neithan423@gmail.com:sancho18",
"rainerfiorentino@gmail.com:rainer123",
"delviegm@gmail.com:d00380038",
"ocramplaystation@hotmail.com:lovemeplease0",
"camposchamorrodiego@gmail.com:Sanches97",
"jadavi2013@gmail.com:j0083454164",
"pagnigabber@hotmail.com:danonino123",
"rodrigopresa11@hotmail.com:facu0306",
"germanqueme@live.com.ar:alpase2010",
"johancotef@gmail.com:gafas123",
"jeshugf77@gmail.com:morenit0",
"arturojr360@hotmail.com:Yateladije03",
"antonio196100091@gmail.com:angus_13",
"davidmoreno4@hotmail.com:4234370lol",
"electrucho172@gmail.com:amorsito10",
"heimendinger@hotmail.cl:juank5585",
"armando.ogaz@gmail.com:5abrilteamo",
"jorojoasg@gmail.com:matikicho008",
"otaku_yue2011@hotmail.com:Akarin12345",
"jrivasvega07@gmail.com:mamotito07",
"erickdemesa5@gmail.com:sakuragi00",
"deniselceleste@hotmail.com:lospiojis12",
"brandonbran35@gmail.com:luchu1234",
"pedro.bozmediano@gmail.com:Unsoloidolo1",
"marioernestoabc@gmail.com:Ratablank0808",
"lionel_cris321@live.com:Crislionel1",
"jhorchnuves@gmail.com:beckham456",
"jonatan.tauste@gmail.com:kovu1989",
"klasclas@gmail.com:adrian86",
"loreguitar749@gmail.com:mourat99",
"franco_lq@hotmail.com:cacona123",
"raultorres1519@hotmail.com:gamer1721",
"christiansaz@hotmail.com:chuchete86",
"camilo2724.cp@gmail.com:kl206cami9",
"emi.sabat10@gmail.com:amanda100",
"sebastian2472@gmail.com:seba2472",
"freddymunoz124@gmail.com:prototype2001",
"marwane20072007@gmail.com:alfa2007",
"jonteran@hotmail.com:txankete83",
"humberto_contreras@live.com.mx:nitro2010",
"juancala99@hotmail.com:calicampeon2005",
"hyugakiller1@gmail.com:martinjesus1",
"swordman_117@hotmail.com:rc-1207.",
"yahircantu@gmail.com:yahir1011",
"ccontreras1710@gmail.com:jotabeche40C",
"kayzen2261@gmail.com:wh23tenak",
"geekdroidkriz@gmail.com:nekrozkriz666",
"hernandezluis1185@gmail.com:unodostres0",
"jspp08@hotmail.com:jusepipi123",
"craftman623@hotmail.com:TATITO162004",
"mark_hmd@hotmail.com:duoc.2011",
"musse_bassline@outlook.com:lambofgod99",
"giancoelias@gmail.com:Barcelona21",
"aymenrabeh2003@gmail.com:adam2008",
"creeper423@gmail.com:Jasenyael1",
"rafaelmerchanaguilar@gmail.com:rafalito23",
"lordcasares@gmail.com:Edenro1448",
"javierfmov94@hotmail.com:spitfire27",
"riva.seba@gmail.com:sg178186",
"xino.16@hotmail.es:S676228232",
"lau_nqn_09@hotmail.com:panchito12345",
"lanlinbross@hotmail.com:fortec12",
"tramitespinto@gmail.com:Grand1252",
"luigiaviles2010@live.com:Rumine1999",
"kalisto_34_@hotmail.com:Kk32323234",
"canavirifloresluis@gmail.com:luis12luis",
"saymon.sanchez@hotmail.com:saymon01",
"jehosafatmortera26@gmail.com:jyj26967",
"texxxmatt@gmail.com:18210724asd",
"nacho.andaur@live.cl:178239nl",
"fabiocastaneda203@gmail.com:mariaclara10",
"csotelo@live.com.ar:Joa424608",
"angeloflow123@outlook.com:roder123",
"diegoedu2003@hotmail.es:ranma12",
"rodrigopasan@gmail.com:Ropasan24",
"zi_ivan_2009@hotmail.com:golddroger14",
"rockerogamer97@gmail.com:devilnevercry97",
"marcrodriguezfranqueza@gmail.com:Laysee2724",
"maxjbbx@gmail.com:blaceyes1",
"tyni650@hotmail.com:killthemall123",
"losvillanos200@gmail.com:mariano01",
"joseeduardosupremo@hotmail.com:joseeduardo1234",
"alexjriver1999@gmail.com:Mckl0pedia",
"braian25gomez@gmail.com:sinclave123",
"borjamorais777@gmail.com:Sobekoneps3",
"pabloguay.22@hotmail.com:cacaloca22",
"tomassoto213@hotmail.com:tomas1234",
"carloox.9@hotmail.com:carlos11",
"jano.caminya@gmail.com:JanCG2005",
"j.polanc@hotmail.com:polanco123",
"fernando.ceneri@yahoo.com:41177742fer",
"rickinolazco@gmail.com:ricardo123",
"tomas.f737@gmail.com:Walala1313",
"klop_15@hotmail.com:klop1527",
"victorgm515@gmail.com:rotciv1994",
"ysteria_25@hotmail.com:warpten25",
"diego_senior12@hotmail.com:diego1452",
"leobcc@outlook.com:naruto10",
"rodrigoberberich@gmail.com:puerta123.",
"dantyhd@gmail.com:2105asdqwe",
"sortexjuegos@gmail.com:sj123456789sj",
"gastonyacobone@gmail.com:28008para",
"jeremyvega@hotmail.cl:jeremyvega11",
"dguardia44@gmail.com:diegoguardia1",
"felipe_sgs@hotmail.com:fcd078689",
"rebe2nov@gmail.com:dayana3312",
"tar7music@gmail.com:narnia13",
"abravoleal20@gmail.com:mariana2000!",
"charlyhocks@gmail.com:loslos041191",
"cristianohenao@hotmail.com:Akalialejo1996",
"mirdavid360@gmail.com:cristo1vive",
"asdrubalfirexd@gmail.com:123456789gamerXD",
"knockedmedal34@gmail.com:mobolico12",
"javierzapata1985@gmail.com:reivaj20",
"isaiascebada@hotmail.com:Netgear1",
"pascualorenes1981@gmail.com:melapela1981",
"sebayeta@gmail.com:05051997super",
"wwe_jona_dx@hotmail.com:Saulnicola5",
"ed_316@hotmail.com:carlos96",
"genderletcrown@gmail.com:mgnjm1234",
"draco_3698@hotmail.com:polopolo123",
"doarsh2@gmail.com:doarss11",
"leandritocalderon@gmail.com:wqsaxz12",
"elviograciano@gmail.com:714a8a88",
"lordcocacola789@gmail.com:maincra12345",
"kris_b0yd@hotmail.com:7429655se",
"maxte436@hotmail.com:Animals2310",
"jesu_sb@hotmail.com:erZuli90",
"sebas.26.1996@hotmail.com:windows26",
"jnfs012@yopmail.com:juegos55",
"crisstan-47@hotmail.com:febrero07",
"ramiremauricio@gmail.com:darkdragon64",
"asanzsaez13@gmail.com:Al3jandro",
"mikel.drakost26@gmail.com:mikeflush1997",
"thegammarayo99@gmail.com:sacred12",
"pogomen20013@gmail.com:churi123",
"gabriel-colin1398@live.com:jtbt7cfd",
"johanfernandocisneros@gmail.com:malboro11",
	
];
  
  var rand = Math.floor(Math.random() * list.length);
  
  var embed = new Discord.RichEmbed()
.addField("**Your Fortnite Account**", list[rand])
 .setFooter("Feel Free To Use My Gen Commands ! Unlock More Access : Fortnite Accounts Generator /// Unlock The CoolDow With Buying The Access")
.setColor("RANDOM")
  
  message.author.send(embed)
message.channel.send("**__Your Account Has Succssfully Generated !__** :thumbsup:")		
		
	}
	
	if(!cmd||cmd==='steamkey'){
		
	if (message.channel.name !== 'gen-premium') return message.reply(`Bruh ! You Know You Cant Use That Of Course Right? + You Need @Premium Gen Role + You must go to the channel #gen-premium To Make This Command Works `);


var list = [
	"Quad Hopping | YAYMY-FMEN0-0QC53",
"CRASHBOT | PVMW5-2PMXW-WHRZK",
"FoxyLand | 8H8VX-9NGHL-ZLFIX",
"Mr.Jezko | 6PBQ5-7K4Z5-56ETZ",
"Truffle Saga | FIBWE-ZTT9G-TN52J",
"Crappy Day Enhanced Edition | H3ENM-4M073-HFD7A",
"Lock Parsing 2 | TDYJ4-XI0AW-D9EHX",
"Don't Fall | 6R526-L9DI6-GHKIR",
"Qubika | 5GTJA-3QLZP-EF66T",
"Purple Heart | LELD7-BEWM0-W2MTF",
"Need For Gowna | IF8DE-V8AZ3-2FG5V",
"TARGET | 4IPNC-L60G6-G7YDL",
"Sos i Pie Sos | 4EK4X-JFXGI-EB9I5",
"A Little Rabbit Story | ZF20C-JMTBW-X56DH",
"Club of fighters | RTYY7-GIF9F-4F5L0",
"Scary House | 9AE7R-D9DXD-ZVWWX",
"Snake Road to apple | XWCRZ-6YZQ5-G6H7A",
"Stone Flower | RA2WZ-FZDCZ-IJVHW",
"Lock Parsing | HRJRQ-D6E9R-CVTBZ",
"AppleSnake | 2672W-Q8YMQ-XMWJK",
"JellyNoid | JF0RJ-02NTA-I7754",
"NASWAY | Z8NCB-FCM9M-Q2FEJ",
"Dark Snow | QI6GR-4ECWE-IF2ND",
"Clergyman | 0HLR3-VM3AA-BLJLY",
"Cute Hedgehog | FLTR4-N65JX-KFQ66",
"Harmless Skeleton | H4FER-ABEGV-9I4LN",
"It`s Chicken! | GQ80F-KAPQ5-RG0G6",
"Only You | ARW6Q-LJMNW-7050E",
"Airstrike One | DEFZ7-3K7W9-44FBE",
"Pixelord | GFNWD-M5Q0Y-5PJ0H",
"Lock Parsing 2 | TDYJ4-XI0AW-D9EHX",
"Don't Fall | 6R526-L9DI6-GHKIR",
"Qubika | 5GTJA-3QLZP-EF66T",
"Purple Heart | LELD7-BEWM0-W2MTF",
"Need For Gowna | IF8DE-V8AZ3-2FG5V",
"TARGET | 4IPNC-L60G6-G7YDL",
"Sos i Pie Sos | 4EK4X-JFXGI-EB9I5",
"Only You | ARW6Q-LJMNW-7050E",
"Airstrike One | DEFZ7-3K7W9-44FBE",
"Pixelord | GFNWD-M5Q0Y-5PJ0H",
"Protect Me | XTYWQ-WN6BJ-V34WT",
"Quad Hopping | YAYMY-FMEN0-0QC53",
"CRASHBOT | PVMW5-2PMXW-WHRZK",
"FoxyLand | 8H8VX-9NGHL-ZLFIX",
"Mr.Jezko | 6PBQ5-7K4Z5-56ETZ",
"Truffle Saga | FIBWE-ZTT9G-TN52J",
"Crappy Day Enhanced Edition | H3ENM-4M073-HFD7A",
"Lock Parsing 2 | TDYJ4-XI0AW-D9EHX",
"Don't Fall | 6R526-L9DI6-GHKIR",
"Qubika | 5GTJA-3QLZP-EF66T",
"Purple Heart | LELD7-BEWM0-W2MTF",
"Need For Gowna | IF8DE-V8AZ3-2FG5V",
"TARGET | 4IPNC-L60G6-G7YDL",
"Sos i Pie Sos | 4EK4X-JFXGI-EB9I5",
"A Little Rabbit Story | ZF20C-JMTBW-X56DH",
"Club of fighters | RTYY7-GIF9F-4F5L0",
"Scary House | 9AE7R-D9DXD-ZVWWX",
"Snake Road to apple | XWCRZ-6YZQ5-G6H7A",
"Stone Flower | RA2WZ-FZDCZ-IJVHW",
"Lock Parsing | HRJRQ-D6E9R-CVTBZ",
"AppleSnake | 2672W-Q8YMQ-XMWJK",
"JellyNoid | JF0RJ-02NTA-I7754",
"NASWAY | Z8NCB-FCM9M-Q2FEJ",
"Dark Snow | QI6GR-4ECWE-IF2ND",
"Clergyman | 0HLR3-VM3AA-BLJLY",
"Cute Hedgehog | FLTR4-N65JX-KFQ66",
"Harmless Skeleton | H4FER-ABEGV-9I4LN",
"!4RC4N01D! 2: Retro Edition | CKM79-M8R0G-887QX",
"Nullysun | M2Y82-D9EQD-LZG02",
"I Can See the Future | HZHLW-K205D-0JH2J",
"Expelled | A8505-GDRTV-V7RK0",
"Stickman Race Draw | 7278W-AAIBJ-9VFJI",
"Forgotten Land | G3DE2-GZYN3-66C9W",
"Clergyman | 0HLR3-VM3AA-BLJLY",
"Cute Hedgehog | FLTR4-N65JX-KFQ66",
"Harmless Skeleton | H4FER-ABEGV-9I4LN",
"It`s Chicken! | GQ80F-KAPQ5-RG0G6",
"Only You | ARW6Q-LJMNW-7050E",
"Airstrike One | DEFZ7-3K7W9-44FBE",
"Pixelord | GFNWD-M5Q0Y-5PJ0H",
"Protect Me | XTYWQ-WN6BJ-V34WT",
"Snakeez | TGGK8-0RAFT-7LW65",
"Star Sweet | ZGPZ4-858JT-WT22E",
"StepX | JRLPC-5AILY-BCPWE",
"The Thing: Space X | EF2AH-3B5Q9-QA4T7",
"Snakeez | TGGK8-0RAFT-7LW65",
"Star Sweet | ZGPZ4-858JT-WT22E",
"Protect Me | XTYWQ-WN6BJ-V34WT",
"Snakeez | TGGK8-0RAFT-7LW65",
"Star Sweet | ZGPZ4-858JT-WT22E",
"Only One | GTA6M-ZVCC7-07TP7",
"Crappy Day Enhanced Edition | H3ENM-4M073-HFD7A",
"Lock Parsing 2 | TDYJ4-XI0AW-D9EHX",
"Don't Fall | 6R526-L9DI6-GHKIR",
"Qubika | 5GTJA-3QLZP-EF66T",
"Purple Heart | LELD7-BEWM0-W2MTF",
"Need For Gowna | IF8DE-V8AZ3-2FG5V",
"TARGET | 4IPNC-L60G6-G7YDL",
"Sos i Pie Sos | 4EK4X-JFXGI-EB9I5",
"A Little Rabbit Story | ZF20C-JMTBW-X56DH",
"!4RC4N01D! | MLZPC-XZ6W8-YWH9Y",
"Peace Phantom | A4W64-TYTFH-20J0F",
"Mumps | LRLAA-5AAEC-5AKBT",
"PIXEL DRIFT | K3BT5-H2TXG-70XAX",
"Sky Jump | PZWN3-E3ZJA-4VJ8M",
"Christmas Mission | BH4JP-WW5BH-2W66H",
"Clumsy Chef | V5N89-KGQML-X05K9",
"Cunning Fox | Q2CEV-6WGL8-DTPAC",
"Favorite Miner | V533N-F4F9E-KIYNQ",
"Galactic Battles | XLJ3P-AMIT7-N5C6P",
"Guinea Pig | ELEDB-NEK2K-VBWR9",
"Mountain Troll | VADG2-5ENEH-FEA9T",
"Unstoppable Hamster | V3PYR-HAKBZ-3TI8G",
"Werewolf Life | AMQVV-EPI5D-05DQG",
"Olympic Team | MKHYK-KDBZV-8WTQF",
"SnowFall | 3XCJV-VEVHX-B4E64",
"!4RC4N01D! 2: Retro Edition | CKM79-M8R0G-887QX",
"Nullysun | M2Y82-D9EQD-LZG02",
"I Can See the Future | HZHLW-K205D-0JH2J",
"Expelled | A8505-GDRTV-V7RK0",
"Stickman Race Draw | 7278W-AAIBJ-9VFJI",
"Forgotten Land | G3DE2-GZYN3-66C9W",
"Clergyman | 0HLR3-VM3AA-BLJLY",
"Cute Hedgehog | FLTR4-N65JX-KFQ66",
"Harmless Skeleton | H4FER-ABEGV-9I4LN",
"It`s Chicken! | GQ80F-KAPQ5-RG0G6",
"Only You | ARW6Q-LJMNW-7050E",
"Airstrike One | DEFZ7-3K7W9-44FBE",
"Pixelord | GFNWD-M5Q0Y-5PJ0H",
"Protect Me | XTYWQ-WN6BJ-V34WT",
"Snakeez | TGGK8-0RAFT-7LW65",
"Star Sweet | ZGPZ4-858JT-WT22E",
"StepX | JRLPC-5AILY-BCPWE",
"The Thing: Space X | EF2AH-3B5Q9-QA4T7",
];	
	var rand = Math.floor(Math.random() * list.length);
  
  var embed = new Discord.RichEmbed()
.addField("**Your Steam Key**", list[rand])
 .setFooter("Feel Free To Use My Gen Commands ! Unlock More Access : Fortnite Accounts Generator /// Unlock The CoolDow With Buying The Access")
.setColor("RANDOM")
  
  message.author.send(embed)
message.channel.send("**__Your Account Has Succssfully Generated !__** :thumbsup:")	
		
}
}

module.exports.help = {
	name: "gen",
	alias: "GEN"
}

