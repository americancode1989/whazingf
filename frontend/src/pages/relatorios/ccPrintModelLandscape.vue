<template>
  <div :id="`pagePrint-${id}`">

    <body id="pageInit">
      <div class="marginsPage">
        <div class="page-header">
          <div class="row">
            <div class="column left">
              <div class="container-header">
                <div
                  class="row text-center"
                  style="font-weight: bold; font-size: 18px;"
                  :style="{'marginTop': subTitle ? '-10px' : '0px'}"
                >
                  {{ title }}
                </div>
                <div
                  v-if="subTitle"
                  class="row text-center"
                  style="font-weight: bold; font-size: 12px;"
                >
                  {{ subTitle }}
                </div>

                <hr
                  class="row"
                  style="margin-top: 20px; margin: 0 auto; width: 90%;"
                >
              </div>
            </div>
          </div>
        </div>

        <div class="page-footer">
          <div style="text-align: center">
            <!-- Footer content -->
          </div>
        </div>

        <table>

          <thead>
            <tr>
              <td>
                <div class="page-header-space"></div>
              </td>
            </tr>
          </thead>

          <tbody id="tableReport">
            <slot name="body"></slot>
          </tbody>

          <tfoot>
            <tr>
              <td>
                <div class="page-footer-space"></div>
              </td>
            </tr>
          </tfoot>
          <div id="footerAppendFiltros"></div>

        </table>
      </div>
    </body>

  </div>
</template>

<script>
const cssText = `
  .marginsPage {
    margin-left: 1cm !important;
    margin-right: 1cm !important;
  }
  .page-header {
    height: 120px !important;
  }
  .page-header-space {
    height: 90px !important;
  }
  .page-header {
    position: fixed !important;
    top: 0px !important;
    width: calc(100% - 0cm) !important;
  }
  .container-header {
    padding-top: 30px;
  }
  header {
    display: none;
    position: fixed;
    top: 0;
  }

  .page-footer,
  .page-footer-space {
    height: 0px !important;
  }

  .page-footer {
    position: fixed !important;
    bottom: 0 !important;
    width: calc(100% - 2cm) !important;
  }

  .page {
    page-break-after: always !important;
  }
  .h1 {
    font-size: 25px;
  }
  .h2 {
    font-size: 20px;
  }
  .h3 {
    font-size: 12px;
  }
  .h4 {
    font-size: 9px;
  }

  .p {
    margin-top: 5px;
    line-height: 50px;
  }

  .row {
    left: 0;
    right: 0;
    position: relative;
  }
  div.right {
    width: 15%;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .text-center {
    text-align: center;
  }
  @media print {
    .customWrap {
      word-wrap: normal !important;
      white-space: normal !important;
      overflow-wrap: break-word;
      word-wrap: break-word;
      -ms-word-break: break-all;
      word-break: break-all;
      word-break: break-word;
    }

    #BrowserPrintDefaults {
      display: none;
    }
    @page {
      size: A4 landscape;
      margin: 0px;
      margin-bottom: 35px;
      left: 0px;
      right: 0px;
      top: 0px;
    }

    body {
      top: 0px !important;
      margin: 0px !important;
      left: 0px;
      width: 297mm;
      height: calc(209mm - 35px); 
    }
    thead {
      display: table-header-group !important;
    }
    tfoot {
      display: table-footer-group !important;
    }
    button {
      display: none;
    }
    footer {
      display: none;
      position: fixed;
      bottom: 0;
    }
  }
`
import { Printd } from 'printd'
import { format } from 'date-fns'
export default {
  name: 'ccPrintModel',
  props: {
    imprimirRelatorio: {
      type: Boolean,
      required: true
    },
    styleP: {
      type: String,
      default: '<p style="line-height: 0.1cm; word-wrap: normal !important; white-space: normal !important;">'
    },
    id: [String, Number],
    title: String,
    subTitle: { type: String, default: '' }
  },
  data () {
    return {
      abrirModal: false,
      dataImpressao: format(new Date(), 'dd/MM/yyyy HH:mm:ss')
    }
  },
  computed: {
    conteudoTexto () {
      const data = this.corpo
      return data
    }
  },
  watch: {
    imprimirRelatorio (v) {
      this.print()
    }
  },
  beforeMount () {
    this.$nextTick(function () {
      window.addEventListener('afterprint', this.fecharModal)
    })
  },
  beforeDestroy () {
    window.removeEventListener('afterprint', this.fecharModal)
    this.$emit('update:imprimirRelatorio', false)
  },
  methods: {
    print () {
      this.d = new Printd()
      const { contentWindow } = this.d.getIFrame() //eslint-disable-line
      const elemento = `#pagePrint-${this.id}`
      this.d.print(document.querySelector(elemento), [cssText, this.styleP])
    },
    printNomal () {
      setTimeout(() => {
        window.print()
      }, 300)
    },
    fecharModal () {
      this.abrirModal = false
      this.$emit('update:imprimirRelatorio', false)
    }
  }
}
</script>

<style lang="scss" scoped>
#pageInit {
  display: none;
}
</style>
