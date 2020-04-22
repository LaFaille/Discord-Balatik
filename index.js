const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = '?'



//commande kick//
client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + 'kick') {
     if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
     let member = message.mentions.members.first()
     if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
     if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :fire: ")
     member.kick()
     message.channel.send('**' + member.user.username + '** a été exclue :white_check_mark:')
    console.log('Un joueur a etais calmez')
  }

})


//commande ban//
client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + 'ban') {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Veuillez mentionner un utilisateur a calmez :x:")
    if (!member.bannable) return message.channel.send("Je ne peux pas calmez cet utilisateur :x: ")
    member.ban()
    message.channel.send('**' + member.user.username + '** a été calmez :white_check_mark:')
    console.log('Un joueur a etais calmez')
 }
})



//Commande clear//
client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "clear") {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande :x:")
      let count = parseInt(args[1])
      if (!count) return message.channel.send("Veuillez indiquer un nombre entre 1 et 99 :x:")
      if (count < 1 || count > 1000) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
      if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide :x:")
      message.channel.bulkDelete(count + 1, true)
      console.log('Des message on etais supprimée :white_check_mark:')
  }

})

//Message de bienvenue//
client.on('guildMemberAdd', function (member) {
  member.createDM().then(function (channel) {
      return channel.send('𝙱𝚘𝚗𝚓𝚘𝚞𝚛 𝙽𝚘𝚞𝚜 𝚜𝚘𝚖𝚖𝚎𝚜 𝚕𝚊 𝙰𝚛𝚝𝚑𝚎𝚗𝚊 . 𝚄𝚗𝚎 𝚏𝚊𝚌𝚝𝚒𝚘𝚗 𝚌𝚘𝚖𝚙é𝚝𝚒𝚝𝚒𝚟𝚎 𝚚𝚞𝚒 𝚓𝚘𝚞𝚎 𝚜𝚞𝚛 𝚋𝚎𝚊𝚞𝚌𝚘𝚞𝚙 𝚍𝚎 𝚜𝚎𝚛𝚟𝚎𝚞𝚛 𝚏𝚊𝚌𝚝𝚒𝚘𝚗 \n 𝙸𝚕 𝚢 𝚊 𝚙𝚊𝚜 𝚍𝚎 𝚛è𝚐𝚕𝚎𝚖𝚎𝚗𝚝 𝚖𝚊𝚒𝚜 𝚜𝚒 𝚟𝚘𝚞𝚜 𝚒𝚗𝚜𝚞𝚕𝚝𝚎𝚣 , 𝚟𝚘𝚞𝚜 𝚊𝚕𝚕𝚎𝚣 ê𝚝𝚛𝚎 𝚋𝚊𝚗  :open_mouth:  \n 𝚂𝚒𝚗𝚘𝚗 𝚗𝚘𝚞𝚜 𝚛𝚎𝚌𝚛𝚞𝚝𝚘𝚗𝚜 𝚍𝚘𝚗𝚌 𝚑é𝚜𝚒𝚝𝚎𝚣 𝚙𝚊𝚜 𝚊 𝚊𝚕𝚕𝚎𝚣 𝚌𝚑𝚎𝚌𝚔 𝚕𝚎 #𝚛𝚎𝚌𝚛𝚞𝚝𝚎𝚖𝚎𝚗𝚝')
  }).catch(console.error)
  console.log('Un membre a rejoind le discord');


})








client.on('ready', function(){
    client.user.setActivity('Streame ta mere!')})

client.on('ready', () => {
  console.log(`Connectée a ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'salut') {
    msg.reply('Salut jeune Negro');
  }
});

client.on('message', msg => {
  if (msg.content === 'Tu fais quoi BOT') {
    msg.reply('Je viole ta mere, monte pas dans la chambre!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sava') {
    msg.reply('Mieux que toi vue ta geuele');
  }
})


client.login("NjkxNDg3MDExMTg1NjIzMDgw.Xp_Xqw.N6jW2uud8QA-Ho7WWVHhyfcvJYA");
