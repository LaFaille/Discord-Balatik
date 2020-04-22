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
    if (!member.bannable) return message.channel.send("Je ne peux pas calmez cet utilisateur :fire: ")
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
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande :/")
      let count = parseInt(args[1])
      if (!count) return message.channel.send("Veuillez indiquer un nombre entre 1 et 99")
      if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
      if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
      message.channel.bulkDelete(count + 1, true)
      console.log('Des message on etais supprimée')
  }

})

//Message de bienvenue//
client.on('guildMemberAdd', function (member) {
  member.createDM().then(function (channel) {
      return channel.send('𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙪𝙚 𝙨𝙪𝙧 𝙡𝙚 𝙙𝙞𝙨𝙘𝙤𝙧𝙙 𝕄𝟘𝕟𝕤𝕥𝟛𝕣 \n . Pas de vulgarité/racisme \n . Respectez les channel \n . Respectez la Faction M0nst3r\n 𝗠𝗲𝗿𝗰𝗶 𝗱𝗲 𝘁𝗮 𝗖𝗼𝗺𝗽𝗿𝗲́𝗵𝗲𝗻𝘀𝗶𝗼𝗻 𝗮𝗺𝘂𝘀𝗲 𝘁𝗼𝗶 𝗯𝗶𝗲𝗻! :slight_smile:')
  }).catch(console.error)


})







client.on('ready', function(){
    client.user.setActivity('M0nst3r!')})

client.on('ready', () => {
  console.log(`Connectée a ${client.user.tag}!`);
});


client.login("Njg2Nzk4NzExMDU3MDIzMDA5.XnPC8w.1iVuVjDqStEHFESU-95pOWjF4WQ");






