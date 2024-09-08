import { Command, Flags } from '@oclif/core'
import { SimpleSymbolNodeCert } from 'simple-symbol-node-cert'

export default class Generate extends Command {
  static description = 'Symbolノード証明書の情報を参照します。'

  static examples = [`<%= config.bin %> <%= command.id %>`]

  static flags = {
    certdir: Flags.string({
      default: './cert',
      description: '証明書ディレクトリパス',
      required: false,
    }),
    networkId: Flags.string({
      char: 'n',
      default: 'mainnet',
      description: 'ネットワークID(mainnet/testnet/any number)',
      required: false,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Generate)
    const ssnc = new SimpleSymbolNodeCert()
    ssnc.info(flags.networkId, flags.certdir)
  }
}
