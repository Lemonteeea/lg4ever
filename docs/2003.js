
  const article = {
    title: '03 | JavaScript 如何实现继承？',
    context: `
                    <p data-nodeid="1721" class="">
                      JavaScript
                      在编程语言界是个异类，它和其他编程语言很不一样，JavaScript
                      可以在运行的时候动态地改变某个变量的类型。
                    </p>
                    <p data-nodeid="1722">
                      比如你永远也没法想到像<code
                        data-backticks="1"
                        data-nodeid="1849"
                        >isTimeout</code
                      >这样一个变量可以存在多少种类型，除了布尔值<code
                        data-backticks="1"
                        data-nodeid="1851"
                        >true</code
                      >和<code data-backticks="1" data-nodeid="1853">false</code
                      >，它还可能是<code data-backticks="1" data-nodeid="1855"
                        >undefined</code
                      >、<code data-backticks="1" data-nodeid="1857">1</code
                      >和<code data-backticks="1" data-nodeid="1859">0</code
                      >、一个时间戳，甚至一个对象。
                    </p>
                    <p data-nodeid="1723">
                      又或者你的代码跑异常了，打开浏览器开始断点，发现<code
                        data-backticks="1"
                        data-nodeid="1862"
                        >InfoList</code
                      >这个变量第一次被赋值的时候是个数组<code
                        data-backticks="1"
                        data-nodeid="1864"
                        >[{name: 'test1', value: '11'}, {name: 'test2', value:
                        '22'}]</code
                      >，过了一会竟然变成了一个对象<code
                        data-backticks="1"
                        data-nodeid="1866"
                        >{test1:'11', test2: '22'}</code
                      >
                    </p>
                    <p data-nodeid="1724">
                      除了变量可以在运行时被赋值为任何类型以外，JavaScript
                      中也能实现继承，但它不像 Java、C++、C#
                      这些编程语言一样基于类来实现继承，而是基于原型进行继承。
                    </p>
                    <p data-nodeid="1725">
                      这是因为 JavaScript
                      中有个特殊的存在：对象。每个对象还都拥有一个原型对象，并可以从中继承方法和属性。
                    </p>
                    <p data-nodeid="1726">
                      提到对象和原型，你曾经是否有过这些疑惑：
                    </p>
                    <ol data-nodeid="1727">
                      <li data-nodeid="1728">
                        <p data-nodeid="1729">
                          JavaScript 的函数怎么也是个对象？
                        </p>
                      </li>
                      <li data-nodeid="1730">
                        <p data-nodeid="1731">
                          <code data-backticks="1" data-nodeid="1871"
                            >__proto__</code
                          >和<code data-backticks="1" data-nodeid="1873"
                            >prototype</code
                          >到底是啥关系？
                        </p>
                      </li>
                      <li data-nodeid="1732">
                        <p data-nodeid="1733">
                          JavaScript 中对象是怎么实现继承的？
                        </p>
                      </li>
                      <li data-nodeid="1734">
                        <p data-nodeid="1735">
                          JavaScript 是怎么访问对象的方法和属性的？
                        </p>
                      </li>
                    </ol>
                    <p data-nodeid="1736">
                      下面我们一起结合问题，来探讨下 JavaScript 对象和继承。
                    </p>
                    <h3 data-nodeid="1737">原型对象和对象是什么关系</h3>
                    <p data-nodeid="1738">
                      在 JavaScript 中，对象由一组或多组的属性和值组成：
                    </p>
                    <div class="course-code-area">
                      <div class="copy-btn">
                        <div class="copy-icon">`
  } 
  export default article
