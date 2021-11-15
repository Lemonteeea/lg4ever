
  const article = {
    title: '02 | CSS：页面布局的基本规则和方式',
    context: `
                    <p data-nodeid="3145" class="">
                      前端页面的布局和样式编写是传统技能，但页面样式的实现大多数情况下都无法速成，需要通过不断练习、反复地调试才能熟练掌握，因此有一些同学常常会感到疑惑，比如：
                    </p>
                    <ol data-nodeid="3146">
                      <li data-nodeid="3147">
                        <p data-nodeid="3148">
                          一个元素总宽高为<code
                            data-backticks="1"
                            data-nodeid="3373"
                            >50px</code
                          >，要怎么在调整边框大小的时候，不需要重新计算和设置<code
                            data-backticks="1"
                            data-nodeid="3375"
                            >width/height</code
                          >呢？
                        </p>
                      </li>
                      <li data-nodeid="3149">
                        <p data-nodeid="3150">
                          为什么给一些元素设置宽高，但是却不生效？
                        </p>
                      </li>
                      <li data-nodeid="3151">
                        <p data-nodeid="3152">
                          如何将一个元素固定在页面的某个位置，具体怎么做？
                        </p>
                      </li>
                      <li data-nodeid="3153">
                        <p data-nodeid="3154">
                          为什么将某个元素<code
                            data-backticks="1"
                            data-nodeid="3380"
                            >z-index</code
                          >设置为<code data-backticks="1" data-nodeid="3382"
                            >9999999</code
                          >，但是它依然被其他元素遮挡住了呢？
                        </p>
                      </li>
                      <li data-nodeid="3155">
                        <p data-nodeid="3156">
                          为什么将某个元素里面的元素设置为<code
                            data-backticks="1"
                            data-nodeid="3385"
                            >float</code
                          >之后，这个元素的高度就歪了呢？
                        </p>
                      </li>
                      <li data-nodeid="3157">
                        <p data-nodeid="3158">
                          让一个元素进行垂直和水平居中，有多少种实现方式？
                        </p>
                      </li>
                    </ol>
                    <p data-nodeid="3159">
                      这些问题产生的根本，是对页面布局规则和常见页面布局方式没掌握透彻。今天我就帮你重新梳理下页面布局的基本规则和布局方式，让以上问题迎刃而解。
                    </p>
                    <h3 data-nodeid="3160">页面布局的基本规则</h3>
                    <p data-nodeid="3161">
                      我们在调试页面样式的时候，如果你不了解页面布局规则，会经常遇到“这里为什么歪了”“这里为什么又好了”这样的困惑。其实页面的布局不只是“碰运气”似的调整样式，浏览器的页面布局会有一些规则，包括：
                    </p>
                    <ul data-nodeid="3162">
                      <li data-nodeid="3163">
                        <p data-nodeid="3164">盒模型计算；</p>
                      </li>
                      <li data-nodeid="3165">
                        <p data-nodeid="3166">内联元素与块状元素布局规则；</p>
                      </li>
                      <li data-nodeid="3167">
                        <p data-nodeid="3168">文档流布局；</p>
                      </li>
                      <li data-nodeid="3169">
                        <p data-nodeid="3170">元素堆叠。</p>
                      </li>
                    </ul>
                    <p data-nodeid="3171">下面我们可以结合问题逐一来看。</p>
                    <h4 data-nodeid="3172">盒模型计算</h4>
                    <p data-nodeid="3173">
                      问题 1：一个元素总宽高为<code
                        data-backticks="1"
                        data-nodeid="3398"
                        >30px</code
                      >，要怎么在调整边框大小的时候，不需要重新计算和设置<code
                        data-backticks="1"
                        data-nodeid="3400"
                        >width/height</code
                      >呢？
                    </p>
                    <p data-nodeid="3174">
                      这个问题涉及浏览器布局中的盒模型计算。什么是盒模型？浏览器对文档进行布局的时候，会将每个元素都表示为这样一个盒子。
                    </p>
                    <p data-nodeid="3175">
                      <img
                        src="https://s0.lgstatic.com/i/image6/M00/33/F7/Cgp9HWBwBrWAfuU6AANyH4P_TXw391.png"
                        alt="Drawing 1.png"
                        data-nodeid="3405"
                      />
                    </p>
                    <p data-nodeid="3176">
                      这就是 CSS
                      基础盒模型，也就是我们常说的盒模型。盒模型主要用来描述元素所占空间的内容，它由四个部分组成：
                    </p>
                    <ul data-nodeid="3177">
                      <li data-nodeid="3178">
                        <p data-nodeid="3179">
                          外边框边界<code data-backticks="1" data-nodeid="3408"
                            >margin</code
                          >（橙色部分）
                        </p>
                      </li>
                      <li data-nodeid="3180">
                        <p data-nodeid="3181">
                          边框边界<code data-backticks="1" data-nodeid="3411"
                            >border</code
                          >（黄色部分）
                        </p>
                      </li>
                      <li data-nodeid="3182">
                        <p data-nodeid="3183">
                          内边距边界<code data-backticks="1" data-nodeid="3414"
                            >padding</code
                          >（绿色部分）
                        </p>
                      </li>
                      <li data-nodeid="3184">
                        <p data-nodeid="3185">
                          内容边界<code data-backticks="1" data-nodeid="3417"
                            >content</code
                          >（蓝色部分）
                        </p>
                      </li>
                    </ul>
                    <p data-nodeid="3186">
                      盒模型是根据元素的样式来进行计算的，我们可以通过调整元素的样式来改变盒模型。上图中的盒模型来自下面这个<code
                        data-backticks="1"
                        data-nodeid="3420"
                        >&lt;div&gt;</code
                      >元素，我们给这个元素设置了<code
                        data-backticks="1"
                        data-nodeid="3422"
                        >margin</code
                      >、<code data-backticks="1" data-nodeid="3424"
                        >padding</code
                      >和<code data-backticks="1" data-nodeid="3426"
                        >border</code
                      >：
                    </p>
                    <div class="course-code-area">
                      <div class="copy-btn">
                        <div class="copy-icon">`
  } 
  export default article
