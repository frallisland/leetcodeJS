/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans=0, n=s.length;
    let st=new Set();
    for(let l=0, r=0; r<n; r++){
        while(st.has(s[r])) st.delete(s[l++]);
        st.add(s[r]);
        ans=Math.max(r-l+1, ans);
    }
    return ans;
};