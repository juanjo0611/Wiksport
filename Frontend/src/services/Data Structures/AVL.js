class Node {
  constructor({ value, height }) {
    this.val = value;
    this.left = null;
    this.right = null;
    this.height = height;
  }
}

class AVL {
  constructor() {
    this.root = null;
    this.order = "";
  }

  create_node(v) {
    const new_node = new Node({value: v, height: 1});
    return new_node;
  }
  get_height(node) {
    return node?.height ?? 0;
  }
  assign_height(node) {
    if (node === null) return;
    let hl = this.get_height(node.left);
    let hr = this.get_height(node.right);
    node.height = Math.max(hl, hr) + 1;
  }
  get_balance(node) {
    let hl = this.get_height(node.left);
    let hr = this.get_height(node.right);
    return hr - hl;
  }
  left_rotation(par) {
    console.assert(par.right !== null);
    const child = par.right;
    par.right = child.left;
    child.left = par;
    this.assign_height(par);
    this.assign_height(child);
    return child;
  }
  right_rotation(par) {
    console.assert(par.left !== null);
    const child = par.left;
    par.left = child.right;
    child.right = par;
    this.assign_height(par);
    this.assign_height(child);
    return child;
  }
  check(node) {
    if (node === null) return node;
    const balance = this.get_balance(node);
    if (Math.abs(balance) < 2) return node;

    if (0 < balance) {
      const child_balance = get_balance(node.right);
      if (child_balance < 0) {
        node.right = this.right_rotation(node.right);
      }
      return this.left_rotation(node);
    }
    if (balance < 0) {
      const child_balance = this.get_balance(node.left);
      if (0 < child_balance) {
        node.left = this.left_rotation(node.left);
      }
      return this.right_rotation(node);
    }
  }
  insert(v) {
    if (this.root === null) this.root = this.create_node(v);
    else this.root = this.add_dfs(this.root, v);
  }
  add_dfs(node, v) {
    if (node === null) return null;
    if (node.val === v) return node;

    if (v < node.val) {
      node.left = this.add_dfs(node.left, v);
      if (node.left === null) node.left = this.create_node(v);
    }
    if (node.val < v) {
      node.right = this.add_dfs(node.right, v);
      if (node.right === null) node.right = this.create_node(v);
    }
    
    this.assign_height(node);
    return this.check(node);
  }
  extract_right_most(node) {
    if (node === null || node.right === null) return node;
    const right_most = this.extract_right_most(node.right);
    if (node.right.right === null) node.right = null;
    this.assign_height(node);
    if (node.right !== null) node.right = this.check(node.right);
    return right_most;
  }
  extract_left_most(node) {
    if (node === null || node.left === null) return node;
    const left_most = this.extract_left_most(node.left);
    if (node.left.left === null) node.left = null;
    this.assign_height(node);
    if (node.left !== null) node.left = this.check(node.left);
    return left_most;
  }
  erase(v) {
    this.root = this.erase_dfs(this.root, v);
  }
  erase_dfs(node, v) {
    if (node === null) return node;
    if (node.val === v) {
      let replacement = null;

      if (node.left !== null) replacement = this.extract_right_most(node.left);
      else replacement = this.extract_left_most(node.right);

      if (replacement !== null) {
        if (node.left !== null && node.left.val !== replacement.val) replacement.left = this.check(node.left);
        if (node.right !== null && node.right.val !== replacement.val) replacement.right = this.check(node.right);
      }
      this.assign_height(replacement);
      return this.check(replacement);
    }
    if (v < node.val) {
      node.left = this.erase_dfs(node.left, v);
    }
    if (node.val < v) {
      node.right = this.erase_dfs(node.right, v);
    }
    this.assign_height(node);
    return this.check(node);
  }

  print_inorder() {
    this.order = "";
    this.pi(this.root);
    return this.order;
  }
  pi(node) {
    if (node === null) return;
    this.pi(node.left);
    this.order += ("" + node.val + " ");
    this.pi(node.right);
  }
}
export default AVL;
