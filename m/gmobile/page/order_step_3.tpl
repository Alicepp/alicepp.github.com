{%extends file="common/page/layout.tpl"%}
{%block name="block_assign"%}
    {%$title=$tplData['title']%}
{%/block%}

{%block name="block_body"%}
     {%widget name="gmobile:widget/page/order/order_step_3.tpl"%}
{%/block%}
{%block name="block_foot_js"%}{%/block%}