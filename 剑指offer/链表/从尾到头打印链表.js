var reversePrint = function(head) {
  if(!head) return [];
  let cur = head;
  let arr = [];
  while(cur){
      arr.push(cur.val);
      cur = cur.next;
  }
  return arr.reverse()
};