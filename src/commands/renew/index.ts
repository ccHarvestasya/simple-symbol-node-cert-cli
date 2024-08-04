import password from '@inquirer/password'
import { Command, Flags } from '@oclif/core'
import { SimpleSymbolNodeCert } from 'simple-symbol-node-cert'

export default class Generate extends Command {
  static description = 'Symbolノード証明書を更新します。'

  static examples = [`<%= config.bin %> <%= command.id %>`]

  static flags = {
    cadays: Flags.integer({
      default: 7300,
      description: 'CA証明書有効日数',
      required: false,
    }),
    certdir: Flags.string({
      default: './cert',
      description: '証明書ディレクトリパス',
      required: false,
    }),
    nodedays: Flags.integer({
      default: 375,
      description: 'Node証明書有効日数',
      required: false,
    }),
    privatekeys: Flags.string({
      default: './privatekeys.yaml',
      description: '暗号化した秘密鍵を保存するファイルパス',
      required: false,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Generate)
    const passwd = await password({ mask: true, message: 'enter password:' })
    const ssnc = new SimpleSymbolNodeCert()
    ssnc.renew(flags.certdir, flags.cadays, flags.nodedays, flags.privatekeys, passwd)
  }
}
