'use strict'
var exec = require('./lib/exec')
var ssh = require('./lib/ssh')

exports.createSocksProxy = exec.createSocksProxy
exports.checkStatus = exec.checkStatus
exports.initAddon = exec.initAddon
exports.withAddonInfo = exec.withAddonInfo
exports.updateClientKey = exec.updateClientKey

exports.socksv5 = ssh.socksv5
exports.connect = ssh.connect
exports.scp = ssh.scp
