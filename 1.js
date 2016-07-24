//验证整个表单的输入值
<script type="text/javascript">
        function checkip(ipaddr)
        {
        var ipaddr = document.all.IP.value;
        var re = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
                if (re.test(ipaddr))
                {
                        var parts = ipaddr.split(".");
                        if (parseInt(parseFloat(parts[0])) == 0)
                        {
                                alert("输入错误,请重新填写");
                                return false;
                        }
                        if (parseInt(parseFloat(parts[3])) == 0)
                        {
                                alert("输入错误,请重新填写");
                                return false;
                        }
                        for (var i=0; i<parts.length; i++)
                        {
                                if (parseInt(parseFloat(parts[i])) > 254)
                                {
                                        alert("输入错误,请重新填写");
                                        return false;
                                }
                        }
                        var form=document.getElementById('form');
                        var inputArray=form.getElementsByTagName("input");
                        var inputArrayLength=inputArray.length;
                        for(var int=0;int<inputArrayLength;int++)
                        {
                                if( inputArray[int].value==null || inputArray[int].value=='')
                                {
                                        alert('第'+(int+1)+'个输入值为空.');
                                        return false;
                                }
                        }
                return true;
                }else{
                        alert("输入错误,请重新填写");
                        return false;
                }
        }
</script>
----------------------------------------------------------------------------------------------------------------------------
        <form onSubmit="return checkip();" action="/host_link" method="post" id="form"> <!--返回true时则post到server 否则不post-->
              <ul class="list">
              <li>IP  ：  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="IP" name="IP" type="text" onclick=""></li>
              <li>端口：  &nbsp;&nbsp;&nbsp;<input id="port" name="port" type="text"></li>
              <li>帐号：&nbsp;&nbsp;&nbsp;&nbsp;<input id="user" name="user" type="text"></li>
              <li>密码：&nbsp;&nbsp;&nbsp;&nbsp;<input id="passwd" name="passwd" type="password" ></li>
              </ul>
          <div class="modal-footer">
              <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
              <button id="" type="submit" class="btn btn-primary" onclick="">添加</button>
          </div>
        </form>
----------------------------------------------------------------------------------------------------------------------------
//ajax 提交数据
<script type="text/javascript">
        function Delete(event){
                var value = event.value
                  if (!confirm("确认要删除该主机吗?")) {
                        window.event.returnValue = false;
                 }
                $.ajax({
                        type: "POST",
                        url: "/host_del",
                        data: {id: value},
                }).done(function(data,status,jqXHR){
                        if(jqXHR.status == 200){
                                if(data.status == 1){
                                        alert("删除成功")
                                }
                                        alert("删除成功")
                        }
                }).fail(function(){
                        alert("删除失败")
                }).always(function(){
                        location.href="/host_list";
                })
        }
   </script>

<li><button id="del" type="submit" value="{{b[u'host_id']}}" onclick="Delete(this)"><i class="icon-trash"></i>删除</button></li>






------------------------------------------------------------------------------------------------------------------------
