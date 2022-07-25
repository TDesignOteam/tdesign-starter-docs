/* eslint-disable */
import matter from "gray-matter";

export default function mdToVue(options) {
  const mdSegment = customRender(options);

  const sfc = `
    <template>
      <td-doc-content ref="tdDocContent" page-status="hidden">
        ${
          mdSegment.tdDocHeader
            ? `
          <td-doc-header
            slot="doc-header"
            ref="tdDocHeader"
            spline="${mdSegment.spline}"
          >
          </td-doc-header>`
            : ""
        }
        <div name="DOC">${mdSegment.docMd}</div>
        <td-doc-footer slot="doc-footer"></td-doc-footer>
      </td-doc-content>
    </template>

    <script>

      export default {
        mounted() {
          const { tdDocContent, tdDocHeader } = this.$refs;

          if (tdDocHeader) {
            tdDocHeader.docInfo = {
              title: \`${mdSegment.title}\`,
              desc: \`${mdSegment.description}\`,
            };
          }
          
    
          this.$emit('loaded', () => {
            tdDocContent.pageStatus = 'show';
          });
        },

        beforeDestroy() {
          this.$refs.tdDocContent.resetAnchorHighlight();
        },
      };
    </script>
  `;

  return sfc;
}

// 解析 markdown 内容
function customRender({ source, file, md }) {
  const { content, data } = matter(source);
  // console.log('data', data);

  // md top data
  const pageData = {
    spline: "",
    toc: true,
    title: "",
    description: "",
    isComponent: false,
    tdDocHeader: true,
    apiFlag: /#+\s*API\n/i,
    ...data,
  };

  const mdSegment = {
    ...pageData,
    docMd: "<td-doc-empty></td-doc-empty>",
  };

  mdSegment.docMd = md.render.call(
    md,
    `${pageData.toc ? "[toc]\n" : ""}${content.replace(/<!--[\s\S]+?-->/g, "")}`
  ).html;

  return mdSegment;
}
